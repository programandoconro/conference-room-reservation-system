import { useContext, useEffect, useState } from "react";
import LimitsContext from "@comp/contexts/limitsContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { differenceInMinutes, format } from "date-fns";
import { ReservationType } from "@comp/utils/types";
import coreImage from "./core-time.png";
import Image from "next/image";

const CoreTime = () => {
  const { limits } = useContext(LimitsContext);
  const { reservations } = useContext(ReservationContext);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
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
  }, [reservations, limits.coreTimeStart, limits.coreTimeEnd]);

  return (
    <div className="flex justify-center align-middle">
      <div className="object-contain">
        <Image
          placeholder="blur"
          alt="core-time"
          quality={100}
          src={coreImage}
        />
      </div>

      <h5 className="text-white absolute self-center text-xl">{difference}</h5>
    </div>
  );
};

export default CoreTime;
