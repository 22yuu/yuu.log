'use client';

import { logout } from '@/api/auth';
import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Heading from '@/components/ui/atoms/Heading';
import LogoutIcon from '@/components/ui/icons/LogoutIcon';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import { UserInfo } from '@/types/user';
import React from 'react';

type Props = {
  title?: string;
};

export default function ContentHeader({ title = '방문 통계' }: Props) {
  const { user, setUser } = useLoginContext() as LoginContextProps;

  const onLogoutHandler = () => {
    logout();
    setUser({} as UserInfo);
    localStorage.removeItem('isLogined');
    localStorage.removeItem('isGuest');
  };

  return (
    <div className="flex justify-between mb-8">
      <Heading size={'xl'}>{title}</Heading>
      <div className="flex items-center gap-4">
        <span>안녕하세요! {user!.user.username}님</span>
        <ToggleDarkModeBtn />
        <button onClick={onLogoutHandler}>
          <LogoutIcon className="cursor-pointer text-red-400" />
        </button>
      </div>
    </div>
  );
}
