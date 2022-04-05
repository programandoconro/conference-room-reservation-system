export type ReservationType = {
  id: number;
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
export type ReservationContextType = {
  date: string;
  setDate: (date: string) => void;

  reservations: ReservationType[];
  setReservations: (reservation: ReservationType[]) => void;

  pickerTime: TimeType;
  setPickerTime: (time: TimeType) => void;
  openPicker: boolean;
  setOpenPicker: (openPicker: boolean) => void;
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
  coreTimeStart: number;
  coreTimeEnd: number;
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

export type EqualTime = {
  resStart: number;
  pickerStart: number;
  resEnd: number;
  pickerEnd: number;
};

export type SameDay = {
  date: string;
  res: ReservationType;
};

export type SameRoom = {
  room: string;
  res: ReservationType;
};

export type CellType = {
  title?: string;
  hour?: string;
  reservation?: ReservationType[];
  room: string;
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
  company: string;
};
