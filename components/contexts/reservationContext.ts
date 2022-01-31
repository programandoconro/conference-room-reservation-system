import { createContext } from "react";
import formatDate from "utils/formatDate";
import { ReservationType } from "utils/types";

type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;
  reservations: ReservationType[];
  setReservations: (reservation: ReservationType[]) => void;
};

const InitialReservationContext: ReservationContextType = {
  date: formatDate(new Date()),
  setDate: (date: string) => {},
  reservations: [
    {
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
