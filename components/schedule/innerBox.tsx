import { useContext } from "react";
import { Box } from "@mui/material";
import SelectionBox from "./selectionBox";
import ReservationContext from "contexts/reservationContext";
import theme from "utils/theme";
import getHours from "date-fns/getHours";
import isBefore from "date-fns/isBefore";
import getDay from "date-fns/getDay";
import differenceInWeeks from "date-fns/differenceInWeeks";

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
  const reservationColor = theme.palette.primary.main;

  if (isBefore(new Date(date), new Date())) {
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
  if (hour > "19") {
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

  reservations.forEach((reservation) => {
    if (
      date === reservation.date &&
      hour >= reservation.start.slice(0, 2) &&
      hour < reservation.end.slice(0, 2) &&
      room === reservation.room
    ) {
      color = reservationColor;
    }
  });
  const handleClickReservation = (color: string) => {
    if (color === "transparent") {
      setOpenTimePicker(true);
      setRoom(room);
    }
  };
  return (
    <div onClick={() => handleClickReservation(color)}>
      <Box className="flex select-none w-full border border-gray-300 ">
        <SelectionBox color={color} />
      </Box>
    </div>
  );
};

export default InnerBox;
