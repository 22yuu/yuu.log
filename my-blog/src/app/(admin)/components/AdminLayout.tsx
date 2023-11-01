import { ReactNode, useEffect, useState } from 'react';
import AdminSidePanel from './AdminSidePanel';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import Login from '@/components/admin/Login';
import { getAccessToken } from '@/api/auth';
import { UserInfo } from '@/types/user';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const {
    user: { accessToken, user },
    setUser,
  } = (useLoginContext() as LoginContextProps) || {};
  const isLogined = localStorage.getItem('isLogined');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getToken = async () => {
      const user = await getAccessToken(accessToken!);
      console.log(user);
      return user;
    };

    getToken().then((userInfo: UserInfo) => {
      setUser(userInfo);
      setLoading(!loading);
    });
  }, []);

  console.log(user);

  if (!user && !isLogined) {
    return <Login />;
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full text-theme-text">
        {/* admin side panel */}
        <AdminSidePanel />
        {/* contents */}
        {!loading && 'loading...'}
        {loading && children}
      </div>
    </div>
  );
}
