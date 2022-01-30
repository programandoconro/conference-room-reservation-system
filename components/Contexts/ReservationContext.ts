import { createContext } from "react";
import formatDate from "../../utils/formatDate";

type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;
};

const InitialReservationContext: ReservationContextType = {
  date: formatDate(new Date()),
  setDate: (date: string) => {},
};

const ReservationContext = createContext<ReservationContextType>(
  InitialReservationContext
);

export default ReservationContext;
