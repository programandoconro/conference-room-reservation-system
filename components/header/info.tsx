import { useContext } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";

const Info = () => {
  const { reservations } = useContext(ReservationContext);
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
              style={{
                display: "flex",
                margin: "2px",
                minWidth: "fit-content",
                width: "80%",
                justifyContent: "center",
              }}
            >
              <CardContent>
                <Typography style={{ fontWeight: "lighter", fontSize: "12px" }}>
                  {reservation.date} {String(reservation.start)} ~{" "}
                  {String(reservation.end)}
                  {reservation.room}
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
