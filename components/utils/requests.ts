import axios from "axios";
import { link } from "fs";
import { ReservationType, UserType } from "./types";

export const postReservation = async (props: ReservationType) => {
  axios.post("http://localhost:3000/api/reservations", props);
};

export const getReservations = async () => {
  const response = await axios.get("http://localhost:3000/api/reservations");
  return response.data;
};

export const signUpUser = async (props: UserType) => {
  return axios
    .post("http://localhost:3000/api/signup", props)
    .then((response) => {
      console.log("signup success", response.status);
      return response;
    })
    .catch((err) => {
      console.log(err);
      alert("email already exists");
    });
};
export const loginUser = async (props: { email: string; password: string }) => {
  return axios
    .post("http://localhost:3000/api/login", props)
    .then((response) => {
      console.log("login success", response.status);
      return response;
    })
    .catch((err) => {
      console.log(err);
      alert("wrong email or password");
    });
};
export const loginUserWithToken = async (props: { token: string }) => {
  return axios
    .post("http://localhost:3000/api/login", props)
    .then((response) => {
      console.log("login success", response.status);
      return response;
    })
    .catch((err) => {
      console.log(err);
      alert("wrong email or password");
    });
};
