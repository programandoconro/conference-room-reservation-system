import { FC, useContext, useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import SelectionBox from "./selectionBox";
import { outerBox, innerBox, grid } from "./sx";
import { rooms, hours } from "utils/constants";
import ReservationContext from "contexts/reservationContext";
import theme from "utils/theme";
import getHours from "date-fns/getHours";
import isBefore from "date-fns/isBefore";
import { getDayName, getMonth, getDayFormat } from "utils/formatDate";
import getDay from "date-fns/getDay";
import differenceInWeeks from "date-fns/differenceInWeeks";
import { getLimitTime } from "@components/utils/requests";

const HoursGrid = (props: {
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
}) => {
  const { setOpenTimePicker, setRoom } = props;
  const { date, reservations } = useContext(ReservationContext);
  const day = getDayFormat(date);
  const month = getMonth(date);
  const dayName = getDayName(date);
  const japDate = `${month}/${day}(${dayName})`;

  const [limitBigRoom, setLimitBigRoom] = useState(0);
  const [limitMedRoom, setLimitMedRoom] = useState(0);
  const [limitSmallRoom, setLimitSmallRoom] = useState(0);

  useEffect(() => {
    getLimitTime(setLimitBigRoom, setLimitMedRoom, setLimitSmallRoom);
  }, []);
  const OuterBox = (props: { item: string }) => {
    return (
      <Box sx={outerBox}>
        <Typography
          style={{ fontWeight: "lighter", fontSize: "12px" }}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {props.item}
        </Typography>
      </Box>
    );
  };

  const reservationColor = theme.palette.primary.main;
  const InnerBox = (props: { hour: string; room: string }) => {
    const { hour, room } = props;
    let color = "white";

    if (isBefore(new Date(date), new Date())) {
      color = "lightgrey";
      if (getDay(new Date()) === getDay(new Date(date))) {
        if (getHours(new Date()) >= Number(hour)) {
          color = "lightgrey";
        } else {
          color = "white";
        }
      }
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
        hour >= String(reservation.start) &&
        hour <= String(reservation.end) &&
        room === reservation.room
      ) {
        color = reservationColor;
      }
    });
    const handleClickReservation = (color: string) => {
      if (color === "white") {
        setOpenTimePicker(true);
        setRoom(room);
      }
    };
    return (
      <div onClick={() => handleClickReservation(color)}>
        <Box sx={innerBox}>
          <SelectionBox
            color={color}
            room={room}
            japDate={`${japDate} ${hour}:00`}
          />
        </Box>
      </div>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Grid style={{ width: "100%" }} container wrap="nowrap" sx={grid}>
        {hours.map((hour, index) => {
          return (
            <div key={index} style={{ width: "100%" }}>
              <OuterBox item={hour} />
              <InnerBox hour={hour} room={rooms[0]} />
              <InnerBox hour={hour} room={rooms[1]} />
              <InnerBox hour={hour} room={rooms[2]} />
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default HoursGrid;
