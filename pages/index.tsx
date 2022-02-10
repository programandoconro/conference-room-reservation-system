import { useContext, useEffect } from "react";
import type { NextPage } from "next";
import Login from "./_login";
import UserContext from "@components/contexts/userContext";
import Reservation from "./_reservations";
import { loginUserWithToken } from "@components/utils/requests";

const Home: NextPage = () => {
  const { authenticated, setAuthenticated, setUser } = useContext(UserContext);

  useEffect(() => {
    const loginWithToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await loginUserWithToken({ token });
        if (response && response.status === 200) {
          setAuthenticated(true);
          setUser({
            name: response.data.name,
            company: response.data.company,
            email: response.data.email,
            password: response.data.password,
          });
        } else {
          setAuthenticated(false);
        }
      } else {
        setAuthenticated(false);
      }
    };
    loginWithToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authenticated === null) {
    return <div style={{ color: "whitesmoke" }}>loading...</div>;
  } else if (authenticated) {
    return <Reservation />;
  }
  return <Login />;
};

export default Home;
