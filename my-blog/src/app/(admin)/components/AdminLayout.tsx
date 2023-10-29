import { ReactNode } from 'react';
import AdminSidePanel from './AdminSidePanel';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import Login from '@/components/admin/Login';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { user } = useLoginContext() as LoginContextProps;

  console.log(user);

  if (user !== 'guest' && !user.user) {
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
