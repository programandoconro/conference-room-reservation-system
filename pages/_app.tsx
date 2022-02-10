import { useState } from "react";
import type { AppProps } from "next/app";
import UserContext from "@components/contexts/userContext";
import { UserType } from "@components/utils/types";

import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/navigation.css";

import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState<UserType>({
    company: "",
    name: "",
    email: "",
    password: "",
  });
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  return (
    <UserContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </UserContext.Provider>
  );
};

export default App;
