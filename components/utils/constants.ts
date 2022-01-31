import formatDate from "./formatDate";
import add from "date-fns/add";

export const hours = [
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

const today = formatDate(new Date());
const tomorrow = formatDate(
  add(new Date(), {
    days: 1,
  })
);

export const rooms = ["会議室１", "会議室２", "会議室3"];
export const initialReservation = [
  {
    date: today,
    hour: "16",
    room: rooms[0],
  },
  {
    date: tomorrow,
    hour: "18",
    room: rooms[1],
  },
  {
    date: today,
    hour: "14",
    room: rooms[2],
  },
];
