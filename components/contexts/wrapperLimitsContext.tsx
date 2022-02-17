import { useState, FC } from "react";
import LimitsContext from "./limitsContext";
import { LimitsTypes } from "@comp/utils/types";

const WrapperLimitsContext: FC = ({ children }) => {
  const [limits, setLimits] = useState<LimitsTypes>({
    company: "",
    limitSmallRoom: 0,
    limitMedRoom: 0,
    limitBigRoom: 0,
    coreTimeStart: 0,
    coreTimeEnd: 0,
  });

  return (
    <LimitsContext.Provider value={{ limits, setLimits }}>
      {children}
    </LimitsContext.Provider>
  );
};

export default WrapperLimitsContext;
