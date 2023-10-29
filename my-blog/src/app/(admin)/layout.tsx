'use client';

import AdminLayout from './components/AdminLayout';
import LoginProivder from '@/contexts/LoginProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LoginProivder>
      <AdminLayout>{children}</AdminLayout>
    </LoginProivder>
  );
}
