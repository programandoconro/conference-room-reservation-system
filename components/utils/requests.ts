import axios from "axios";
import { ReservationType } from "./types";

export const postReservation = async (props: ReservationType) => {
  axios.post("http://localhost:3000/api/reservations", props);
};

export const getReservations = async () => {
  const response = await axios.get("http://localhost:3000/api/reservations");
  return response.data;
};
