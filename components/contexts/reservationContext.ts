import { createContext } from "react";
import formatDate, { getTimestamp } from "@comp/utils/formatDate";
import { ReservationType, ReservationContextType } from "@comp/utils/types";

const InitialReservationContext: ReservationContextType = {
  date: formatDate(new Date()),
  setDate: (date: string) => {},
  reservations: [
    {
      company: "lateral",
      name: "John Doe",
      email: "ro@casa.com",
      timestamp: getTimestamp(),
      date: "2022/02/07",
      start: "4:00",
      end: "5:00",
      room: "",
    },
  ],
  setReservations: (reservations: ReservationType[]) => {},
  start: null,
  end: null,
  setStart: (start: Date | number | null) => {},
  setEnd: (start: Date | number | null) => {},
};

const ReservationContext = createContext<ReservationContextType>(
  InitialReservationContext
);

export default ReservationContext;
