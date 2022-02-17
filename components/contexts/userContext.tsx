import { createContext, FC, useState } from "react";
import { UserType, UserContextType } from "@comp/utils/types";

const InitialUserContext: UserContextType = {
  user: {
    name: "",
    email: "",
    company: "",
    password: "",
  },
  setUser: (user: UserType) => {},
  authenticated: false,
  setAuthenticated: (authenticated: boolean | null) => {},
};

const UserContext = createContext<UserContextType>(InitialUserContext);

export const UserContextWrapper: FC = ({ children }) => {
  const [user, setUser] = useState<UserType>({
    company: "",
    name: "",
    email: "",
    password: "",
  });
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  return (
    <UserContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
