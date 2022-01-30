import { useState } from "react";
import formatDate from "../utils/formatDate";
import Calendar from "../components/Calendar/calendar";
import Schedule from "../components/Schedule/schedule";
import ReservationContext from "../components/Contexts/ReservationContext";

const Reservation = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  return (
    <ReservationContext.Provider value={{ date, setDate }}>
      <div className="reservation-container">
        <header>
          <h1>会議室予約システム</h1>
        </header>

        <Calendar />
        <Schedule />
      </div>
    </ReservationContext.Provider>
  );
};

export default Reservation;
