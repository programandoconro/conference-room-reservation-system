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
  limits: {
    company: "",
    limitSmallRoom: 0,
    limitMedRoom: 0,
    limitBigRoom: 0,
    coreTime: 0,
  },
  setLimits: (limits: LimitsTypes) => {},
};

const AdminContext = createContext<AdminContextType>(InitialUserContext);

export default AdminContext;
