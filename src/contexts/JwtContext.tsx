import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { AuthProps, JWTContextType, UserProfile } from '../types/auth.tsx';
import { LOGIN, LOGOUT } from '../reducers/auth/actions';
import authReducer from '../reducers/auth';
import Loader from '../components/loader';

const KC_URL = import.meta.env.VITE_KEYCLOAK_URL as string;
const KC_REALM = import.meta.env.VITE_KEYCLOAK_REALM as string;
const KC_CLIENT_ID = import.meta.env.VITE_KEYCLOAK_CLIENT_ID as string;

// initial state
const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

const verifyToken = (token: string): boolean => {
  if (!token) return false;
  const decoded = jwtDecode<JwtPayload>(token);
  return decoded.exp ? decoded.exp * 1000 > Date.now() : false;
};

const setSession = (accessToken?: string | null, refreshToken?: string | null) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const init = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken && verifyToken(accessToken)) {
          setSession(accessToken);
          const user = jwtDecode(accessToken) as UserProfile;
          dispatch({
            type: LOGIN,
            payload: { isLoggedIn: true, user },
          });
        } else {
          dispatch({ type: LOGOUT });
        }
      } catch (err) {
        console.error(err);
        dispatch({ type: LOGOUT });
      }
    };

    init();
  }, []);

  const login = async (email: string, password: string) => {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', KC_CLIENT_ID);
    params.append('username', email);
    params.append('password', password);

    const response = await axios.post(
      `${KC_URL}/realms/${KC_REALM}/protocol/openid-connect/token`,
      params,
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );

    const { access_token, refresh_token } = response.data;
    setSession(access_token, refresh_token);

    const user = jwtDecode(access_token) as UserProfile;
    dispatch({
      type: LOGIN,
      payload: { isLoggedIn: true, user },
    });
  };

  const logout = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const postLogoutRedirectUri = window.location.origin;

      if (accessToken && refreshToken) {
        // Gửi yêu cầu logout đến Keycloak
        const params = new URLSearchParams();
        params.append('client_id', KC_CLIENT_ID);
        params.append('refresh_token', refreshToken);

        await axios.post(`${KC_URL}/realms/${KC_REALM}/protocol/openid-connect/logout`, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`,
          },
        });
      }

      // Xóa token và cập nhật trạng thái
      setSession(null);
      dispatch({ type: LOGOUT });

      // Chuyển hướng sau khi đăng xuất
      window.location.href = postLogoutRedirectUri;
    } catch (e) {
      console.error('Logout error:', e);
      // Xóa token ngay cả khi yêu cầu logout thất bại
      setSession(null);
      dispatch({ type: LOGOUT });
      // Thông báo lỗi (tùy chọn)
      alert('Đăng xuất thất bại. Vui lòng thử lại.');
      window.location.href = window.location.origin;
    }
  };

  const resetPassword = async (email: string) => {
    console.log('Redirect user tới Keycloak reset password cho:', email);
  };

  const updateProfile = () => {
    window.location.href = `${KC_URL}/realms/${KC_REALM}/account`;
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    const params = new URLSearchParams();
    params.append('client_id', KC_CLIENT_ID);
    params.append('username', email);
    params.append('email', email);
    params.append('firstName', firstName);
    params.append('lastName', lastName);
    params.append('password', password);
    params.append('password-confirm', password);

    await axios.post(`${KC_URL}/realms/${KC_REALM}/protocol/openid-connect/registrations`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  };

  if (!state.isInitialized) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider
      value={{ ...state, login, logout, resetPassword, updateProfile, register }}
    >
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
