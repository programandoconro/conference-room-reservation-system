import type { AppProps } from "next/app";
import { UserContextWrapper } from "@comp/contexts/userContext";

import "../styles/globals.css";

import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserContextWrapper>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </UserContextWrapper>
  );
};

export default App;
