import { useContext } from "react";
import SelectionBox from "./selectionBox";
import ReservationContext from "contexts/reservationContext";
import getHours from "date-fns/getHours";
import isBefore from "date-fns/isBefore";
import getDay from "date-fns/getDay";
import differenceInWeeks from "date-fns/differenceInWeeks";
import minutesToPercentange from "./minutesToPercentange";
import { getToday } from "@comp/utils/formatDate";

const InnerBox = (props: {
  hour: string;
  room: string;
  limitMedRoom: Number;
  limitBigRoom: Number;
  limitSmallRoom: Number;
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
}) => {
  const {
    hour,
    room,
    limitBigRoom,
    limitMedRoom,
    limitSmallRoom,
    setOpenTimePicker,
    setRoom,
  } = props;

  let color = "transparent";
  const { date, reservations } = useContext(ReservationContext);

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
  if (hour === "~") {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limitMedRoom &&
    room === "中会議室"
  ) {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limitBigRoom &&
    room === "大会議室"
  ) {
    color = "lightgrey";
  }
  if (
    differenceInWeeks(new Date(date), new Date()) < limitSmallRoom &&
    room === "小会議室"
  ) {
    color = "lightgrey";
  }
  const isGrey = isBefore(new Date(), new Date(getToday()))
    ? "lightgrey"
    : "transparent";
  let isEndReservation: boolean = false;
  reservations.forEach((reservation) => {
    const minutesStart = reservation.start.slice(-2);
    const minutesEnd = reservation.end.slice(-2);
    const minutesAfterHour = minutesToPercentange(Number(minutesStart));
    const minutesBeforeHour = minutesToPercentange(Number(minutesEnd));
    if (date === reservation.date && room === reservation.room) {
      if (hour > "19") {
        color = "lightgrey";
      }
      if (
        hour >= reservation.start.slice(0, 2) &&
        hour < reservation.end.slice(0, 2)
      ) {
        if (minutesStart === "00") {
          const bg = `linear-gradient(to right, yellow ${minutesAfterHour},${isGrey} 0%)`;
          color = bg;
        } else if (hour === reservation.start.slice(0, 2)) {
          const bg = `linear-gradient(to right, ${isGrey} ${minutesAfterHour}, yellow 0%)`;
          color = bg;
        } else if (hour > reservation.start.slice(0, 2)) {
          const bg = `linear-gradient(to right, yellow 100%, transparent 0%)`;
          color = bg;
        }
      } else if (hour === reservation.end.slice(0, 2) && minutesEnd > "00") {
        const bg = `linear-gradient(to right, yellow ${minutesBeforeHour}, ${isGrey} 0%)`;
        color = bg;
        isEndReservation = true;
      }
    }
  });
  const handleClickReservation = (color: string) => {
    if (color === "transparent") {
      setOpenTimePicker(true);
      setRoom(room);
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
        <div className="w-full">
          <SelectionBox color={color} />
        </div>
      </div>
    </div>
  );
};

export default InnerBox;
