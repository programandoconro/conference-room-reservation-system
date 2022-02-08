import { useContext } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import ReservationContext from "@components/contexts/reservationContext";

const Info = () => {
  const { reservations } = useContext(ReservationContext);
  console.log(reservations);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "gray",
        padding: "10px",
        overflowY: "scroll",
        margin: "10px",
      }}
    >
      {reservations.map((reservation, key) => {
        return (
          <div
            key={key}
            style={{
              justifyContent: "center",
              display: "flex",
            }}
          >
            <Card
              style={{ display: "flex", margin: "2px", width: "fit-content" }}
            >
              <CardContent>
                <Typography style={{ fontWeight: "lighter", fontSize: "12px" }}>
                  {reservation.date} {reservation.hour}:00 {reservation.room}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </Container>
  );
};
export default Info;
