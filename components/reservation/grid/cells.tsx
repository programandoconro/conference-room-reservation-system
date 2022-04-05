import { useContext } from "react";
import { ReservationType, CellType } from "@comp/utils/types";
import differenceInMinutes from "date-fns/differenceInMinutes";
import ReservationContext from "@comp/contexts/reservationContext";
import isBefore from "date-fns/isBefore";
import { getHours, isToday } from "date-fns";

const Cell = (props: CellType) => {
  const {
    title,
    hour,
    reservation,
    setRoom,
    setOpenTimePicker,
    room,
    company,
  } = props;
  const { setPickerTime, date } = useContext(ReservationContext);

  const timeNow = new Date();
  const dateNow = new Date(date);

  const isDatebeforeNow = isBefore(dateNow, timeNow);

  let backgroundColor = "";
  if (isToday(dateNow)) {
    const isHourBeforeNow = getHours(timeNow) >= Number(hour);
    if (isHourBeforeNow) {
      backgroundColor = "lightgrey";
    }
  } else if (isDatebeforeNow) {
    backgroundColor = "lightgrey";
  }

  const handleClickReservation = () => {
    if (!backgroundColor) {
      setOpenTimePicker(true);
      setRoom(room);

      const selectedTime = {
        start: new Date(new Date().setHours(Number(hour), 0)),
        end: new Date(new Date().setHours(Number(hour) + 2, 0)),
      };
      setPickerTime(selectedTime);
    }
  };

  return (
    <div>
      {reservation?.map((res: ReservationType, key: number) => {
        const startHour = new Date(res.start).getHours().toString();
        const endHour = new Date(res.end).getHours().toString();
        const startMinutes =
          new Date(res.start).getMinutes().toString() === "0"
            ? "00"
            : new Date(res.start).getMinutes().toString();
        const endMinutes =
          new Date(res.end).getMinutes().toString() === "0"
            ? "00"
            : new Date(res.end).getMinutes().toString();
        const diff = differenceInMinutes(
          new Date(res.end),
          new Date(res.start)
        );
        const calcWidth = String(diff / 9.6) + "100%";

        const showReservation =
          hour === startHour && !title && date === res.date;

        const isYourCompany = company === res.company;

        return (
          <div key={key}>
            {showReservation && (
              <div
                style={{
                  width: calcWidth,
                  backgroundColor: isYourCompany ? "#fef08a" : "lightgrey",
                }}
                className="absolute border text-xs h-10 flex justify-center items-center"
              >
                {startHour}:{startMinutes} - {endHour}:{endMinutes}
              </div>
            )}
          </div>
        );
      })}
      <div
        className={
          !backgroundColor
            ? " border hover:bg-purple-200 transition-colors hover:border-purple-600 h-10 flex justify-end items-center"
            : "border h-10"
        }
        style={{ backgroundColor: backgroundColor }}
        onClick={handleClickReservation}
      />
    </div>
  );
};

export default Cell;
