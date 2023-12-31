import { BASE_URL } from './const';

export interface LoginRequest {
  username: string;
  password: string;
}

// 로그인 함수
export const login = async (args: LoginRequest) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(args),
    cache: 'no-store',
  });

  if (!res.ok && res.status === 500) {
    throw new Error('Invalid Password...!');
  }

  const data = await res.json();
  return data;
};

// 로그아웃
export const logout = async () => {
  const res = await fetch(`${BASE_URL}/admin/logout`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return res;
};

// Access Token 만료 혹은 새로고침 시 토큰 재발급 함수
export const getAccessToken = async (token: string) => {
  const res = await fetch(`${BASE_URL}/admin/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  });

  const data = await res.json();
  return data;
};

export const dummy = async (token: string) => {
  console.log(`token: ${token}`);

  const res = await fetch(`${BASE_URL}/admin/dummy`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  });

  console.log(res);
};
