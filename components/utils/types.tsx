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

export type AdminType = {
  company: string;
  email: string;
  password: string;
};

export type TimeType = {
  start: Date | number | null;
  end: Date | number | null;
};
<<<<<<< HEAD
=======

>>>>>>> coretime
export type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;

  reservations: ReservationType[];
  setReservations: (reservation: ReservationType[]) => void;

  pickerTime: TimeType;
  setPickerTime: (time: TimeType) => void;
};

export type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
  authenticated: boolean | null;
  setAuthenticated: (authenticated: boolean | null) => void;
};

export type LimitsTypes = {
  company: string;
  limitSmallRoom: number;
  limitMedRoom: number;
  limitBigRoom: number;
  coreTime: number;
};

export type AdminContextType = {
  admin: AdminType;
  setAdmin: (user: AdminType) => void;
  authAdmin: boolean | null;
  setAuthAdmin: (authAdmin: boolean | null) => void;
};

export type LimitsContextType = {
  limits: LimitsTypes;
  setLimits: (limits: LimitsTypes) => void;
};

export type TimePickerType = {
  open: boolean;
  setOpen: (open: boolean) => void;
  room: string;
};
