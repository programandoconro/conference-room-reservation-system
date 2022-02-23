import axios from "axios";
import { ReservationType, UserType, LimitsTypes } from "./types";

export const postReservation = async (props: ReservationType) => {
  axios.post(`http://localhost:3000/api/reservations/${props.company}`, props);
};
export const deleteReservation = async (company: string, id: number) => {
  await axios.delete(`http://localhost:3000/api/reservations/${company}`, {
    data: String(id),
  });
};

export const getReservations = async (company: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/reservations/${company}`
    );
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

export const getLimitTime = async (props: {
  company: string;
  setLimits: (limits: LimitsTypes) => void;
}) => {
  const { setLimits, company } = props;
  try {
    const response = await axios.get(`/api/limits/${company}`);
    response.data[0] && setLimits(response.data[0]);
  } catch (e) {
    console.log(e);
  }
};

export const postLimitTime = (props: LimitsTypes) => {
  const {
    company,
    limitSmallRoom,
    limitMedRoom,
    limitBigRoom,
    coreTimeStart,
    coreTimeEnd,
  } = props;
  console.log(props);
  axios.post(`/api/limits/${company}`, {
    company,
    limitSmallRoom,
    limitMedRoom,
    limitBigRoom,
    coreTimeStart,
    coreTimeEnd,
  });
};
