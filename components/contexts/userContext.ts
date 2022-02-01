import { createContext } from "react";
import { UserType } from "@components/utils/types";

type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  authenticated: boolean | null;
  setAuthenticated: (authenticated: boolean | null) => void;
};

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
