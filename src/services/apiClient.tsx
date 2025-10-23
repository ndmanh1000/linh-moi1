// apiClient.ts
import axios, { AxiosError, AxiosInstance } from 'axios';

class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor (thêm token nếu cần)
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Response interceptor (xử lý error)
    this.client.interceptors.response.use(
      (response) => response.data,
      (error: AxiosError) => {
        if (error.response) {
          console.error('API Error:', error.response);
        } else {
          console.error('Network Error:', error.message);
        }
        return Promise.reject(error);
      },
    );
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    return this.client.get(url, { params });
  }

  public async post<T>(url: string, data?: object): Promise<T> {
    return this.client.post(url, data);
  }

  public async put<T>(url: string, data?: object): Promise<T> {
    return this.client.put(url, data);
  }

  public async delete<T>(url: string): Promise<T> {
    return this.client.delete(url);
  }
}

// Export instance với baseURL
export const apiClient = new ApiClient(import.meta.env.VITE_APP_API_URL);
