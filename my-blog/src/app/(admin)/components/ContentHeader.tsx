import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Heading from '@/components/ui/atoms/Heading';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import React from 'react';

type Props = {
  title?: string;
};

export default function ContentHeader({ title = '방문 통계' }: Props) {
  const { user } = useLoginContext() as LoginContextProps;

  return (
    <div className="flex justify-between mb-8">
      <Heading size={'xl'}>{title}</Heading>
      <div className="flex items-center gap-4">
        <span>안녕하세요! {user !== 'guest' ? '관리자' : 'Guest'}님</span>
        <ToggleDarkModeBtn />
      </div>
    </div>
  );
}
