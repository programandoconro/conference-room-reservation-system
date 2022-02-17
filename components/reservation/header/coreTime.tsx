import { useContext, useEffect, useState } from "react";
import LimitsContext from "@comp/contexts/limitsContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { differenceInHours } from "date-fns";
import { ReservationType } from "@comp/utils/types";

const CoreTime = () => {
  const { limits } = useContext(LimitsContext);
  const { reservations } = useContext(ReservationContext);
  const [difference, setDifference] = useState(0);
  useEffect(() => {
    let monthUseTime = 0;
    const calcCoreTime = () => {
      const currentMoth = new Date().getMonth();
      reservations.forEach((res: ReservationType) => {
        const resMoth = new Date(res.date).getMonth();
        if (resMoth === currentMoth) {
          const diff = differenceInHours(
            new Date(res.end),
            new Date(res.start)
          );
          diff && (monthUseTime += diff);
        }
      });
    };

    calcCoreTime();
    const d = limits.coreTime - monthUseTime;
    setDifference(d);
  }, [reservations, limits.coreTime]);

  return (
    <div className="pt-2">
      <h5 className="text-xs">今月のコアタイム</h5>
      <div
        className=" flex m-5 p-2 justify-center"
        style={{
          background: "linear-gradient(to right, blue, red)",
        }}
      >
        <h5 className="text-white">{difference}</h5>
      </div>
    </div>
  );
};

export default CoreTime;
