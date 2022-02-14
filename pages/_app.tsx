import { useState } from "react";
import type { AppProps } from "next/app";
import UserContext from "@comp/contexts/userContext";
import { UserType } from "@comp/utils/types";

import "../styles/globals.css";

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
