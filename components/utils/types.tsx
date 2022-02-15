export type ReservationType = {
  company: string;
  name: string;
  email: string;
  date: string;
  start: string;
  end: string;
  room: string;
  timestamp: string;
};
export type UserType = {
  company: string;
  name: string;
  email: string;
  password: string;
};

export type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;
  reservations: ReservationType[];
  setReservations: (reservation: ReservationType[]) => void;
  start: Date | number | null;
  end: Date | number | null;
  setStart: (start: Date | number | null) => void;
  setEnd: (end: Date | number | null) => void;
};

export type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
  authenticated: boolean | null;
  setAuthenticated: (authenticated: boolean | null) => void;
};

export type TimePickerType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  room: string;
};
