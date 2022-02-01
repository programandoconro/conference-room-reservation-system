import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Login from "./login";
import UserContext from "@components/contexts/userContext";
import Reservation from "./reservations";
import { loginUserWithToken } from "@components/utils/requests";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const { authenticated, setAuthenticated } = useContext(UserContext);

  useEffect(() => {
    const loginWithToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await loginUserWithToken({ token });
        if (response && response.status === 200) {
          setAuthenticated(true);
          router.push("/reservations");
        }
      }
      console.log(token);
    };
    loginWithToken();
  }, []);

  return <div>{authenticated ? <Reservation /> : <Login />}</div>;
};

export default Home;
