import { createContext } from "react";
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

export default UserContext;
