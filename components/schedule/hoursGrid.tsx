import { FC, useContext, useState } from "react";
import { Grid, Typography, Box, Theme } from "@mui/material";
import SelectionBox from "./selectionBox";
import { outerBox, innerBox, grid } from "./sx";
import { rooms, hours } from "utils/constants";
import ReservationContext from "contexts/reservationContext";
import theme from "utils/theme";
import ReservationForm from "reservation-form/reservationForm";
import getHours from "date-fns/getHours";
import isBefore from "date-fns/isBefore";
import { getDayName, getMonth, getDayFormat } from "utils/formatDate";
import getDay from "date-fns/getDay";
import differenceInWeeks from "date-fns/differenceInWeeks";
import differenceInMonths from "date-fns/differenceInMonths";

const HoursGrid: FC = () => {
  const { date, reservations } = useContext(ReservationContext);
  const [openForm, setOpenForm] = useState(false);
  const day = getDayFormat(date);
  const month = getMonth(date);
  const dayName = getDayName(date);
  const japDate = `${month}/${day}(${dayName})`;

  const OuterBox = (props: { item: string }) => {
    return (
      <Box sx={outerBox}>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          {props.item}
        </Typography>
      </Box>
    );
  };
  const reservationColor = theme.palette.primary.main;
  const [reservationRoom, setReservationRoom] = useState<string>("");
  const [reservationHour, setReservationHour] = useState<string>("");
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
      differenceInWeeks(new Date(date), new Date()) < 2 &&
      room === "中会議室"
    ) {
      color = "lightgrey";
    }
    if (
      differenceInMonths(new Date(date), new Date()) < 1 &&
      room === "大会議室"
    ) {
      color = "lightgrey";
    }

    reservations.forEach((reservation) => {
      if (
        date === reservation.date &&
        hour === reservation.hour &&
        room === reservation.room
      ) {
        color = reservationColor;
      }
    });
    const handleClickReservation = (color: string) => {
      if (color === "white") {
        setReservationHour(hour);
        setReservationRoom(room);
        setOpenForm(true);
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
  const handleCloseForm = () => {
    setOpenForm(false);
  };
  return (
    <>
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

      <ReservationForm
        open={openForm}
        handleClose={handleCloseForm}
        hour={reservationHour}
        room={reservationRoom}
      />
    </>
  );
};

export default HoursGrid;
