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
      email: "",
      name: "",
      company: "",
      timestamp: getTimestamp(),
    };
    newReservations.push(reservationToPost);
    setReservations(newReservations);
    await postReservation(reservationToPost);
    handleClose();
  };

  return (
    <Modal open={open} onBackdropClick={handleClose}>
      <Card>
        <CardContent>
          <Typography>{date}</Typography>
          <Typography>{hour}</Typography>
          <Typography>{room}</Typography>
          <Button onClick={makeReservation} variant="contained">
            次
          </Button>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default ReservationForm;
