import { useContext } from "react";
import ReservationContext from "contexts/reservationContext";
import { Button, Card, CardContent, Modal, Typography } from "@mui/material";

const ReservationForm = (props: {
  open: boolean;
  handleClose: () => void;
  hour: string;
  room: string;
}) => {
  const { date, setReservations, reservations } =
    useContext(ReservationContext);
  const { open, handleClose, hour, room } = props;

  const makeReservation = () => {
    const newReservations = [...reservations];
    newReservations.push({
      date: date,
      hour: hour,
      room: room,
    });
    setReservations(newReservations);
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
