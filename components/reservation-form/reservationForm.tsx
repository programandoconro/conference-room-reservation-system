import { useContext } from "react";
import ReservationContext from "contexts/reservationContext";
import { Button, Card, CardContent, Modal, Typography } from "@mui/material";
import { postReservation } from "utils/requests";
import { getTimestamp } from "utils/formatDate";

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
    height: "100%",
    margin: "auto",
    width: "max-content",
  };
  const subTitle = {
    textDecoration: "underline",
  };

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
            <Typography>{date}</Typography>
            <hr />
            <Typography style={subTitle} variant="h5">
              時間
            </Typography>
            <Typography>{`${hour}:00`}</Typography>
            <hr />
            <Button onClick={makeReservation} variant="contained">
              次
            </Button>
          </CardContent>
        </Card>
      </div>
    </Modal>
  );
};

export default ReservationForm;
