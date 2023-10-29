'use client';

import { login } from '@/api/login';
import { FormEvent } from 'react';

export default function Login() {
  const labelStyle = 'block text-sm';
  const inputStyle = 'w-full px-5 py-1 rounded focus:outline-theme-text';
  const buttonStyle = 'w-full px-5 py-1 bg-theme-primary rounded text-white';
  const divideStyle = 'mb-4';

  const onLoginSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event?.currentTarget);

    const loginRes = await login({
      username: formData.get('username') as string,
      password: formData.get('password') as string,
    });

    if (loginRes === 'fail') {
      console.log('로그인 실패...');
      return;
    }

    console.log(loginRes);
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
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
          <button className={buttonStyle}>로그인</button>
        </div>
        <div>
          <button className={buttonStyle}>게스트로 입장하기</button>
        </div>
      </form>
    </div>
  );
}
