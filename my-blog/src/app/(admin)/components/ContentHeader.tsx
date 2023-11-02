'use client';

import { getAccessToken } from '@/api/auth';
import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Heading from '@/components/ui/atoms/Heading';
import LogoutIcon from '@/components/ui/icons/LogoutIcon';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import React from 'react';

type Props = {
  title?: string;
};

export default function ContentHeader({ title = '방문 통계' }: Props) {
  const {
    user: { user },
  } = useLoginContext() as LoginContextProps;

  return (
    <div className="flex justify-between mb-8">
      <Heading size={'xl'}>{title}</Heading>
      <div className="flex items-center gap-4">
        <span>안녕하세요! {user.username}님</span>
        <ToggleDarkModeBtn />
        <LogoutIcon className="cursor-pointer text-red-400" />
      </div>
    </div>
  );
}
