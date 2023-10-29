import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Login from '@/components/admin/Login';
import Heading from '@/components/ui/atoms/Heading';
import React from 'react';

type Props = {
  title?: string;
};

export default function ContentHeader({ title = '방문 통계' }: Props) {
  const user = false;

  return (
    <div className="flex justify-between mb-8">
      <Heading size={'xl'}>{title}</Heading>
      <div className="flex items-center gap-4">
        <span>Welcome! {user ? 'Admin' : 'Guest'}</span>
        <ToggleDarkModeBtn />
      </div>
    </div>
  );
}
