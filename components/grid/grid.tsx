import { FC, useContext, useEffect } from "react";
import ReservationContext from "@comp/contexts/reservationContext";
import Rooms from "./rooms";
import Cell from "./cells";
import { labelHours, ROOMS } from "@comp/utils/constants";
import { ReservationType } from "@comp/utils/types";

const Grid: FC = () => {
  const { reservations } = useContext(ReservationContext);

  let smallRoomReservations: ReservationType[] = [];
  let medRoomReservations: ReservationType[] = [];
  let bigRoomReservations: ReservationType[] = [];

  reservations.forEach((reservation) => {
    if (reservation.room === ROOMS.small) {
      smallRoomReservations.push(reservation);
    }
    if (reservation.room === ROOMS.med) {
      medRoomReservations.push(reservation);
    }
    if (reservation.room === ROOMS.big) {
      bigRoomReservations.push(reservation);
    }
  });

  return (
    <div className="grid grid-flow-col auto-cols-auto relative">
      <Rooms />
      {labelHours.map((hour) => {
        return (
          <div key={hour}>
            <Cell title={hour} hour={hour} />
            <Cell reservation={bigRoomReservations} hour={hour} />
            <Cell reservation={medRoomReservations} hour={hour} />
            <Cell reservation={smallRoomReservations} hour={hour} />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
