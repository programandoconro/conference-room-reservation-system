import { useState } from "react";
import type { AppProps } from "next/app";
import UserContext from "@components/contexts/userContext";
import { UserType } from "@components/utils/types";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";

import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/reservation.css";
import "../styles/schedule.css";
import "../styles/navigation.css";

registerLocale("ja", ja);

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  return (
    <UserContext.Provider
      value={{ user, setUser, authenticated, setAuthenticated }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
};

export default App;
