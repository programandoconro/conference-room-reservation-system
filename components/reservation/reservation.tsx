import { useEffect, useState } from "react";
import Schedule from "./schedule";
import Header from "./header";
import Calendar from "./calendar/";
import NavigationArea from "./nav-area/";
import { Container } from "@mui/material";
import formatDate from "@comp/utils/formatDate";
import { TimeType, ReservationType } from "@comp/utils/types";
import { getReservations } from "@comp/utils/requests";
import { initialReservation } from "@comp/utils/constants";
import ReservationContext from "@comp/contexts/reservationContext";
import { LimitsContextProvider } from "@comp/contexts/limitsContext";
import Grid from "@comp/grid/grid";

const Reservation = (props: { company: string }) => {
  const { company } = props;
  const [date, setDate] = useState(formatDate(new Date()));

  const [reservations, setReservations] =
    useState<ReservationType[]>(initialReservation);

  const [pickerTime, setPickerTime] = useState<TimeType>({
    start: null,
    end: null,
  });
  useEffect(() => {
    const getInitialReservations = async () => {
      if (company) {
        const response = await getReservations(company);
        response?.data && setReservations(response.data);
      }
    };
    getInitialReservations();
  }, [company]);

  return (
    <ReservationContext.Provider
      value={{
        pickerTime,
        setPickerTime,
        date,
        setDate,
        reservations,
        setReservations,
      }}
    >
      <LimitsContextProvider>
        <div className="h-full w-full bg-white">
          <div className="m-1 p-1">
            <Header company={company} />
          </div>
          <div className="pb-4 border-2 border-solid border-grey">
            <Container>
              <Calendar />
            </Container>
            <Container>
              <NavigationArea />
            </Container>
            <Container>
              <Grid />
              <Schedule />
            </Container>
          </div>
        </div>
      </LimitsContextProvider>
    </ReservationContext.Provider>
  );
};

export default Reservation;
