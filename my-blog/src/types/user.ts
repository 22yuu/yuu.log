type ADMIN = 'admin';
type GUEST = 'guest';

type Role = ADMIN | GUEST;

export interface User {
  username: string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: string;
  __v?: number;
}

export interface UserInfo {
  accessToken?: string;
  user: User;
}
