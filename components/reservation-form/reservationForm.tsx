import { useContext } from "react";
import ReservationContext from "contexts/reservationContext";
import { Button, Card, CardContent, Modal, Typography } from "@mui/material";
import { postReservation } from "utils/requests";
import { getTimestamp, getDayName } from "utils/formatDate";

const ReservationForm = (props: {
  open: boolean;
  handleClose: () => void;
  hour: string;
  room: string;
}) => {
  const { date, setReservations, reservations } =
    useContext(ReservationContext);
  const { open, handleClose, hour, room } = props;

  const makeReservation = async () => {
    const newReservations = [...reservations];
    const reservationToPost = {
      date: date,
      hour: hour,
      room: room,
      email: "mail",
      name: "name",
      company: "company",
      timestamp: getTimestamp(),
    };
    newReservations.push(reservationToPost);
    setReservations(newReservations);
    await postReservation(reservationToPost);
    handleClose();
  };
  const cardStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "fit-content",
  };
  const subTitle = {
    textDecoration: "underline",
  };
  const buttonStyle = {
    width: "200px",
  };

  const reservationDay = `${date}(${getDayName(date).slice(0, 1)})`;

  return (
    <Modal open={open} onBackdropClick={handleClose}>
      <div style={cardStyle}>
        <Card>
          <CardContent>
            <Typography style={subTitle} variant="h5">
              部屋タイプ
            </Typography>
            <Typography>{room}</Typography>
            <hr />
            <Typography style={subTitle} variant="h5">
              予約日
            </Typography>
            <Typography>{reservationDay}</Typography>
            <hr />
            <Typography style={subTitle} variant="h5">
              時間
            </Typography>
            <Typography>{`${hour}:00`}</Typography>
            <hr />
            <Button
              style={buttonStyle}
              onClick={makeReservation}
              variant="contained"
            >
              次
            </Button>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
};

export default ReservationForm;
