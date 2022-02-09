import axios from "axios";
import { ReservationType, UserType } from "./types";

export const postReservation = async (props: ReservationType) => {
  axios.post("http://localhost:3000/api/reservations", props);
};

export const getReservations = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/reservations");
    return response.data;
  } catch (e) {
    console.log(e);
  }
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

export const getLimitTime = (
  setLimitBigRoom: (n: number) => void,
  setLimitMedRoom: (n: number) => void,
  setLimitSmallRoom: (n: number) => void
) => {
  try {
    axios.get("/api/admin").then((res) => {
      res.data.data[0].forEach((item: { room: string; week: string }) => {
        if (item.room === "大会議室") {
          setLimitBigRoom(Number(item.week));
        }
        if (item.room === "中会議室") {
          setLimitMedRoom(Number(item.week));
        }
        if (item.room === "小会議室") {
          setLimitSmallRoom(Number(item.week));
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};

export const postLimitTime = (room: string, target: string) => {
  axios.post("/api/admin", {
    room: room,
    week: target,
  });
};
