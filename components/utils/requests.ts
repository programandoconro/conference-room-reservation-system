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
export const loginAdmin = async (props: {
  email: string;
  password: string;
  company: string;
}) => {
  console.log(props);
  return axios
    .post(`http://localhost:3000/api/admin/${props.company}`, props)
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
  setLimitSmallRoom: (n: number) => void,
  setLimitMedRoom: (n: number) => void,
  setLimitBigRoom: (n: number) => void,
  company: string
) => {
  try {
    axios.get(`/api/limits/${company}`).then((res) => {
      res.data.data[0].forEach(
        (item: { limitSmall: string; limitMed: string; limitBig: string }) => {
          setLimitBigRoom(Number(item.limitSmall));
          setLimitMedRoom(Number(item.limitMed));
          setLimitSmallRoom(Number(item.limitBig));
        }
      );
    });
  } catch (e) {
    console.log(e);
  }
};

export const postLimitTime = (
  limitSmall: string,
  limitMed: string,
  limitBig: string,
  company: string
) => {
  axios.post(`/api/limits/${company}`, {
    limitSmall,
    limitMed,
    limitBig,
    company,
  });
};
