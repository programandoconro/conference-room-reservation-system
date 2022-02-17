import { useState, useEffect } from "react";
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
import WrapperLimitsContext from "@comp/contexts/wrapperLimitsContext";

const Reservation = () => {
  const [date, setDate] = useState(formatDate(new Date()));

  const [reservations, setReservations] =
    useState<ReservationType[]>(initialReservation);

  const [pickerTime, setPickerTime] = useState<TimeType>({
    start: null,
    end: null,
  });

  useEffect(() => {
    const getInitialReservations = async () => {
      const response = await getReservations();
      response?.data && setReservations(response.data);
    };
    getInitialReservations();
  }, []);

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
      <WrapperLimitsContext>
        <div className="h-full w-full bg-white">
          <div className="m-1 p-1">
            <Header />
          </div>
          <div className="pb-4 border-2 border-solid border-grey">
            <Container>
              <Calendar />
            </Container>
            <Container>
              <NavigationArea />
            </Container>
            <Container>
              <div className="schedule">
                <Schedule />
              </div>
            </Container>
          </div>
        </div>
      </WrapperLimitsContext>
    </ReservationContext.Provider>
  );
};

export default Reservation;
