'use client';

import { login } from '@/api/auth';
import { LoginContextProps, useLoginContext } from '@/contexts/LoginProvider';
import { FormEvent } from 'react';
import { User, UserInfo } from '@/types/user';
import Link from 'next/link';

export default function Login() {
  const labelStyle = 'block text-sm';
  const inputStyle = 'w-full px-5 py-1 rounded focus:outline-theme-text';
  const buttonStyle = 'w-full px-5 py-1 bg-theme-secondary rounded text-white';
  const divideStyle = 'mb-4';
  const { setUser, setLoginLoading } = useLoginContext() as LoginContextProps;

  const onLoginSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event?.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (username === '') {
      alert('아이디를 입력해주세요...!');
      return;
    }

    if (password === '') {
      alert('비밀번호를 입력해주세요...!');
      return;
    }

    const loginRes = await login({
      username,
      password,
    }).catch((e) => {
      // catch로 잡으니까 AdminLayout에서 undefined 에러 발생...
      // console.error(e);
      alert('올바르지 않은 비밀번호 입니다...!');
    });

    if (loginRes) {
      setUser(loginRes);
      setLoginLoading(true);
      localStorage.setItem('isLogined', 'true');
    }
  };

  const onGuestLoginHandler = () => {
    const guestInfo: User = {
      username: 'Guest',
      role: 'guest',
    };
    setUser({ user: guestInfo });
    setLoginLoading(true);
    localStorage.setItem('isGuest', 'true');
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form
        className="max-w-sm p-10 rounded shadow-xl w-full bg-gray-300 bg-opacity-25 text-theme-text"
        onSubmit={onLoginSubmitHandler}
      >
        <p className="w-full text-center text-lg font-bold ">LOGIN</p>
        <div className={divideStyle}>
          <label className={labelStyle}>아이디 </label>
          <input
            type="text"
            placeholder="아이디"
            name="username"
            className={inputStyle}
          ></input>
        </div>
        <div className={divideStyle}>
          <label className={labelStyle}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호 입력"
            name="password"
            className={inputStyle}
          ></input>
        </div>
        <div className={divideStyle}>
          <button type="submit" className={buttonStyle}>
            로그인
          </button>
        </div>
        <div>
          <button className={buttonStyle} onClick={onGuestLoginHandler}>
            게스트로 입장하기
          </button>
        </div>
      </form>
      <Link href="/" className="mt-8 text-theme-text">
        블로그로 돌아가기
      </Link>
    </div>
  );
}
