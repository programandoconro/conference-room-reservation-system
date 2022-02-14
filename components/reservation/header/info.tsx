import { useContext } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";

const Info = () => {
  const { reservations, date } = useContext(ReservationContext);
  return (
    <Container className="flex bg-slate-100 p-1 mt-1 overflow-y-scroll">
      {reservations
        .slice(0)
        .reverse()
        .map((reservation, key) => {
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center"
            >
              <Card
                className="flex min-w-full mt-2 w-8/12 "
                style={{
                  backgroundColor:
                    date === reservation.date ? "yellow" : "white",
                }}
              >
                <CardContent>
                  <Typography
                    style={{ fontWeight: "lighter", fontSize: "12px" }}
                  >
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