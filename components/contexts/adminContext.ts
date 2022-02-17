import { createContext } from "react";
import { AdminType, AdminContextType, LimitsTypes } from "@comp/utils/types";

const InitialUserContext: AdminContextType = {
  admin: {
    email: "",
    company: "",
    password: "",
  },
  setAdmin: (user: AdminType) => {},
  authAdmin: false,
  setAuthAdmin: (authAdmin: boolean | null) => {},
};

const AdminContext = createContext<AdminContextType>(InitialUserContext);

export default AdminContext;
