import { useContext, useEffect, useState } from "react";
import LimitsContext from "@comp/contexts/limitsContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { differenceInMinutes } from "date-fns";
import { ReservationType } from "@comp/utils/types";

const CoreTime = (props: { company: string }) => {
  const { limits } = useContext(LimitsContext);
  const { reservations } = useContext(ReservationContext);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    if (limits.company === props.company) {
      let monthUseTime = 0;
      const calcCoreTime = () => {
        const currentMoth = new Date().getMonth();
        reservations.forEach((res: ReservationType) => {
          const resMoth = new Date(res.date).getMonth();
          if (resMoth === currentMoth) {
            const diff = differenceInMinutes(
              new Date(res.end),
              new Date(res.start)
            );
            diff && (monthUseTime += diff);
          }
        });
      };

      calcCoreTime();

      const deltaCoreTime = (limits.coreTimeEnd - limits.coreTimeStart) * 30;
      const minutesToHours = monthUseTime / 60;
      const remainingCoreTime = deltaCoreTime - minutesToHours;

      setDifference(remainingCoreTime);
    }
  }, [reservations, limits.coreTimeStart, limits.coreTimeEnd]);

  return (
    <>
      <h5 className="pr-1">Core time: </h5>
      <div className="flex justify-center align-middle border w-10">
        <h5 className="text-black self-center text-xl">{difference}</h5>
      </div>
    </>
  );
};

export default CoreTime;
