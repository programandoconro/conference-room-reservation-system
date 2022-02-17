import { useContext } from "react";
import SelectionBox from "./selectionBox";
import ReservationContext from "contexts/reservationContext";
import getHours from "date-fns/getHours";
import isBefore from "date-fns/isBefore";
import getDay from "date-fns/getDay";
import differenceInWeeks from "date-fns/differenceInWeeks";
import minutesToPercentange from "./minutesToPercentange";
import { getIsToday } from "@comp/utils/formatDate";
import { LimitsTypes } from "@comp/utils/types";
import LimitsContext from "@comp/contexts/limitsContext";

const InnerBox = (props: {
  hour: string;
  room: string;
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
}) => {
  const { hour, room, setOpenTimePicker, setRoom } = props;

  const { limits } = useContext(LimitsContext);

  let color = "transparent";
  const { date, reservations, setPickerTime } = useContext(ReservationContext);

  const isDateBeforeToday = isBefore(new Date(date), new Date());
  if (isDateBeforeToday) {
    color = "lightgrey";
    if (getDay(new Date()) === getDay(new Date(date))) {
      if (getHours(new Date()) >= Number(hour)) {
        color = "lightgrey";
      } else {
        color = "transparent";
      }
    }
  }
  if (hour === "~" || hour > "19") {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limits.limitMedRoom &&
    room === "中会議室"
  ) {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limits.limitBigRoom &&
    room === "大会議室"
  ) {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limits.limitSmallRoom &&
    room === "小会議室"
  ) {
    color = "lightgrey";
  }
  const isGrey =
    (isDateBeforeToday && !getIsToday(date)) ||
    (getIsToday(date) && new Date().getHours() >= Number(hour))
      ? "lightgrey"
      : "transparent";

  let isEndReservation: boolean = false;
  let message: string = "";
  reservations.forEach((res) => {
    const minutesStart = new Date(res.start).getMinutes().toString();
    const minutesEnd = new Date(res.end).getMinutes().toString();
    const hourStart = new Date(res.start).getHours().toString();
    const hourEnd = new Date(res.end).getHours().toString();

    const minutesAfterHour = minutesToPercentange(Number(minutesStart));
    const minutesBeforeHour = minutesToPercentange(Number(minutesEnd));

    if (date === res.date && room === res.room) {
      if (
        hour >= new Date(res.start).getHours().toString() &&
        hour < new Date(res.end).getHours().toString()
      ) {
        if (minutesStart === "0") {
          const bg = `linear-gradient(to right, yellow ${minutesAfterHour},${isGrey} 0%)`;
          color = bg;
        } else if (hour === hourStart) {
          const bg = `linear-gradient(to right, ${isGrey} ${minutesAfterHour}, yellow 0%)`;
          color = bg;
        } else if (hour > hourStart) {
          const bg = `linear-gradient(to right, yellow 100%, transparent 0%)`;
          color = bg;
        }
      } else if (hour === hourEnd && minutesEnd > "00") {
        const bg = `linear-gradient(to right, yellow ${minutesBeforeHour}, ${isGrey} 0%)`;
        color = bg;
        isEndReservation = true;
      }
    }
    if (res.room === room && hourStart === hour) {
      message = `${hourStart} - ${hourEnd}`;
    }
  });
  const handleClickReservation = (color: string) => {
    if (color === "transparent") {
      setOpenTimePicker(true);
      setRoom(room);

      const selectedTime = {
        start: new Date(new Date().setHours(Number(hour), 0)),
        end: new Date(new Date().setHours(Number(hour) + 2, 0)),
      };
      setPickerTime(selectedTime);
    }
  };
  const isReservation =
    color === "transparent" || color === "lightgrey" || isEndReservation
      ? "0.5px solid lightgrey"
      : "none";
  return (
    <div onClick={() => handleClickReservation(color)}>
      <div
        className="flex select-none w-full m-0"
        style={{
          borderRight: isReservation,
        }}
      >
        <div className="w-full overflow-hidden">
          <SelectionBox color={color} message={message} />
        </div>
      </div>
    </div>
  );
};

export default InnerBox;
