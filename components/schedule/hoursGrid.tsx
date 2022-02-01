import { FC, useContext, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import SelectionBox from "./selectionBox";
import { outerBox, innerBox, grid } from "./sx";
import { rooms, hours } from "utils/constants";
import ReservationContext from "contexts/reservationContext";
import theme from "utils/theme";
import ReservationForm from "reservation-form/reservationForm";

const HoursGrid: FC = () => {
  const { date, reservations } = useContext(ReservationContext);
  const [openForm, setOpenForm] = useState(false);

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
      if (color !== reservationColor) {
        setReservationHour(hour);
        setReservationRoom(room);
        setOpenForm(true);
      } else {
        alert("この時間は予約済みです。");
      }
    };
    return (
      <div onClick={() => handleClickReservation(color)}>
        <Box sx={innerBox}>
          <SelectionBox color={color} />
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
              <OuterBox item={hour} />
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
