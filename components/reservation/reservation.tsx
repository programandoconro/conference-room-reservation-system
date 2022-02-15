import { useState, useEffect } from "react";
import Schedule from "./schedule";
import Header from "./header";
import Calendar from "./calendar/";
import NavigationArea from "./nav-area/";
import { Container } from "@mui/material";
import formatDate from "@comp/utils/formatDate";
import { ReservationType } from "@comp/utils/types";
import { getReservations } from "@comp/utils/requests";
import { initialReservation } from "@comp/utils/constants";
import ReservationContext from "@comp/contexts/reservationContext";

const Reservation = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  const [reservations, setReservations] =
    useState<ReservationType[]>(initialReservation);

  const [start, setStart] = useState<Date | number | null>(null);
  const [end, setEnd] = useState<Date | number | null>(null);

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
        start,
        setStart,
        end,
        setEnd,
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
