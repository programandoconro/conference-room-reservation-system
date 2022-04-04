import formatDate from "./formatDate";
import add from "date-fns/add";

export const hours = [
  "~",
  "08",
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
export const labelHours = [
  "08",
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
  "~",
];

const today = formatDate(new Date());
const tomorrow = formatDate(
  add(new Date(), {
    days: 1,
  })
);

export const rooms = ["大会議室", "中会議室", "小会議室"];
export const ROOMS = {
  small: "小会議室",
  med: "中会議室",
  big: "大会議室",
};
export const initialReservation = [
  {
    company: "",
    name: "",
    email: "",
    timestamp: today,
    date: "",
    start: "",
    end: "",
    room: rooms[0],
    id: 0,
  },
];
export const SECRET_KEY =
  "laksdjf2347rdy66lkhlk4j54h3l4j5h673lk4j5h7ljk34h578ljk0lhj7w3";
