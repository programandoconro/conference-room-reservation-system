import { useContext } from "react";
import { ReservationType } from "@comp/utils/types";
import differenceInMinutes from "date-fns/differenceInMinutes";
import ReservationContext from "@comp/contexts/reservationContext";
import isBefore from "date-fns/isBefore";
import { getHours, isToday } from "date-fns";

const Cell = (props: {
  title?: string;
  hour?: string;
  reservation?: ReservationType[];
  room: string;
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
  company: string;
}) => {
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

  const setBackgroundColor = () => {
    const timeNow = new Date();
    const dateNow = new Date(date);

    const isDatebeforeNow = isBefore(dateNow, timeNow);

    if (isToday(dateNow)) {
      const isHourBeforeNow = getHours(timeNow) >= Number(hour);
      if (isHourBeforeNow) {
        return "lightgrey";
      }
    } else if (isDatebeforeNow) {
      return "lightgrey";
    }
  };

  const handleClickReservation = () => {
    setOpenTimePicker(true);
    setRoom(room);

    const selectedTime = {
      start: new Date(new Date().setHours(Number(hour), 0)),
      end: new Date(new Date().setHours(Number(hour) + 2, 0)),
    };
    setPickerTime(selectedTime);
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
        const calcWidth = String(diff / 9.5) + "100%";

        const showReservation =
          hour === startHour &&
          !title &&
          date === res.date &&
          company === res.company;

        return (
          <div key={key}>
            {showReservation && (
              <div
                style={{ width: calcWidth }}
                className="absolute border text-xs border-yellow-400 bg-yellow-200 h-10 flex justify-center items-center"
              >
                {startHour}:{startMinutes} - {endHour}:{endMinutes}
              </div>
            )}
          </div>
        );
      })}
      <div
        className=" border hover:bg-purple-200 hover:border-purple-600 transition h-10 flex justify-end items-center"
        style={{ backgroundColor: setBackgroundColor() }}
        onClick={handleClickReservation}
      />
    </div>
  );
};

export default Cell;
