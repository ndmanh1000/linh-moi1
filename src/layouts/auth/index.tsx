import AppLayout from '../AppLayout';

// project import
import AuthGuard from '../../utils/guards/AuthGuard';

// ==============================|| LAYOUT - AUTH ||============================== //

export default function AuthLayout() {
  return (
    <AuthGuard>
      <AppLayout />
    </AuthGuard>
  );
}
