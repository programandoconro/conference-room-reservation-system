import type { AppProps } from "next/app";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";

import "../styles/globals.css";
import "../styles/calendar.css";
import "../styles/reservation.css";
import "../styles/schedule.css";
import "../styles/navigation.css";

registerLocale("ja", ja);

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
