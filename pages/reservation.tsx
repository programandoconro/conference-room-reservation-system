import { useState } from "react";
import formatDate from "@components/utils/formatDate";
import Calendar from "@components/calendar/calendar";
import Schedule from "@components/schedule/schedule";
import NavigationArea from "@components/nav-area/navigationArea";
import ReservationContext from "contexts/reservationContext";

const Reservation = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  return (
    <ReservationContext.Provider value={{ date, setDate }}>
      <div className="reservation-container">
        <header>
          <h1>会議室予約システム</h1>
        </header>

        <Calendar />
        <NavigationArea />
        <Schedule />
      </div>
    </ReservationContext.Provider>
  );
};

export default Reservation;
