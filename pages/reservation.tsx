import { useState, useEffect } from "react";
import formatDate from "@components/utils/formatDate";
import Calendar from "@components/calendar/calendar";
import Schedule from "@components/schedule/schedule";
import NavigationArea from "@components/nav-area/navigationArea";
import ReservationContext from "contexts/reservationContext";
import { Container } from "@mui/material";
import { ReservationType } from "@components/utils/types";
import { initialReservation } from "@components/utils/constants";
import { getReservations } from "utils/requests";

const Reservation = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  const [reservations, setReservations] =
    useState<ReservationType[]>(initialReservation);

  useEffect(() => {
    const getInitialReservations = async () => {
      const response = await getReservations();
      response.data && setReservations(response.data);
    };
    getInitialReservations();
  }, []);

  return (
    <ReservationContext.Provider
      value={{ date, setDate, reservations, setReservations }}
    >
      <Container className="reservation-page">
        <header>
          <h1>会議室予約システム</h1>
        </header>
        <div className="reservation-container">
          <Calendar />
          <NavigationArea />
          <Schedule />
        </div>
      </Container>
    </ReservationContext.Provider>
  );
};

export default Reservation;
