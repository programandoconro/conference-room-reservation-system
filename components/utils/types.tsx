export type ReservationType = {
  company: string;
  name: string;
  email: string;
  date: string;
  hour: string;
  room: string;
  timestamp: string;
};
export type UserType = {
  company: string;
  name: string;
  email: string;
  password: string;
};

export type ReservationLimitType = {
  大会議室: number;
  中会議室: number;
  小会議室: number;
};
export type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;
  reservations: ReservationType[];
  setReservations: (reservation: ReservationType[]) => void;
};
