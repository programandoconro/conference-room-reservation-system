import { useContext } from "react";
import { ReservationType } from "@comp/utils/types";
import differenceInMinutes from "date-fns/differenceInMinutes";
import ReservationContext from "@comp/contexts/reservationContext";

const Cell = (props: {
  title?: string;
  hour?: string;
  reservation?: ReservationType[];
  room: string;
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
}) => {
  const { title, hour, reservation, setRoom, setOpenTimePicker, room } = props;
  const { setPickerTime, date } = useContext(ReservationContext);
  const cellClassName =
    "border hover:border-purple-600 hover:border-2 transition";
  const titleClassName = "h-10 flex justify-end items-center";
  const className = title
    ? titleClassName
    : titleClassName + " " + cellClassName;

  const totalCols = 14;
  const marginUnit = "1" + " rem";

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
        const calcWidth = String(diff / 9) + "%";

        const showReservation =
          hour === startHour && !title && date === res.date;

        return (
          <div key={key}>
            {showReservation && (
              <div
                style={{ width: calcWidth }}
                className="absolute rounded border border-1 border-yellow-400 bg-yellow-200 h-[39px] flex justify-center items-center"
              >
                {startHour}:{startMinutes} - {endHour}:{endMinutes}
              </div>
            )}
          </div>
        );
      })}
      <div className={className} onClick={handleClickReservation}>
        {title}
      </div>
    </div>
  );
};

export default Cell;
