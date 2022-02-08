import { createContext } from "react";
import formatDate from "utils/formatDate";
import {
  ReservationType,
  ReservationContextType,
  ReservationLimitType,
} from "utils/types";

const InitialReservationContext: ReservationContextType = {
  date: formatDate(new Date()),
  setDate: (date: string) => {},
  reservations: [
    {
      company: "lateral",
      name: "John Doe",
      email: "ro@casa.com",
      timestamp: "",
      date: "",
      hour: "",
      room: "",
    },
  ],
  setReservations: (reservations: ReservationType[]) => {},
};

const ReservationContext = createContext<ReservationContextType>(
  InitialReservationContext
);

export default ReservationContext;
