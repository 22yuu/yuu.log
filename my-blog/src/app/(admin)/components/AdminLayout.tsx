import { ReactNode } from 'react';
import AdminSidePanel from './AdminSidePanel';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import Login from '@/components/admin/Login';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user: userInfo } = (useLoginContext() as LoginContextProps) || {};

  if (userInfo !== 'guest' && !userInfo.user) {
    return <Login />;
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full text-theme-text">
        {/* admin side panel */}
        <AdminSidePanel />
        {/* contents */}
        {children}
      </div>
    </div>
  );
}
