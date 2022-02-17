import { createContext } from "react";
import { LimitsTypes, LimitsContextType } from "@comp/utils/types";
const InitialLimitsContext = {
  limits: {
    company: "",
    limitSmallRoom: 0,
    limitMedRoom: 0,
    limitBigRoom: 0,
    coreTimeStart: 0,
    coreTimeEnd: 0,
  },
  setLimits: (limits: LimitsTypes) => {},
};

const LimitsContext = createContext<LimitsContextType>(InitialLimitsContext);

export default LimitsContext;
