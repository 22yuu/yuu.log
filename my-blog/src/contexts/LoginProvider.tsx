import { GUEST, UserInfo } from '@/types/user';
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
  user: UserInfo | GUEST;
  setUser: Dispatch<SetStateAction<UserInfo | GUEST>>;
};

const LoginContext = createContext<LoginContextProps | null>(null);

export default function LoginProivder({ children }: Props) {
  const [user, setUser] = useState<UserInfo | GUEST>({} as UserInfo);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => {
  return useContext(LoginContext);
};
