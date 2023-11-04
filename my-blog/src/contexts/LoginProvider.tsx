import { UserInfo } from '@/types/user';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type Props = {
  children: React.ReactNode;
};

export type LoginContextProps = {
  user: UserInfo;
  loginLoading: boolean;
  setUser: Dispatch<SetStateAction<UserInfo>>;
  setLoginLoading: Dispatch<SetStateAction<boolean>>;
};

const LoginContext = createContext<LoginContextProps | null>(null);

export default function LoginProivder({ children }: Props) {
  const [user, setUser] = useState<UserInfo>({} as UserInfo);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  return (
    <LoginContext.Provider
      value={{ user, loginLoading, setUser, setLoginLoading }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => {
  return useContext(LoginContext);
};
