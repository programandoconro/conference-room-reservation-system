import { useState, useEffect } from "react";
import ReservationContext from "contexts/reservationContext";
import formatDate from "@components/utils/formatDate";
import Calendar from "@components/calendar/calendar";
import Schedule from "@components/schedule/schedule";
import NavigationArea from "@components/nav-area/navigationArea";
import Header from "@components/header";
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
      response?.data && setReservations(response.data);
    };
    getInitialReservations();
  }, []);

  return (
    <ReservationContext.Provider
      value={{
        date,
        setDate,
        reservations,
        setReservations,
      }}
    >
      <div className="h-full w-full bg-white">
        <Header />
        <div className="pb-4 border-2 border-solid border-grey">
          <Container>
            <Calendar />
          </Container>
          <Container>
            <NavigationArea />
          </Container>
          <Container>
            <div className="schedule">
              <Schedule />
            </div>
          </Container>
        </div>
      </div>
    </ReservationContext.Provider>
  );
};

export default Reservation;
