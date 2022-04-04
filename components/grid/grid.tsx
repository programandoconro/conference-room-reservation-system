import { FC, useContext, useState } from "react";
import ReservationContext from "@comp/contexts/reservationContext";
import Rooms from "./rooms";
import Cell from "./cells";
import { labelHours, ROOMS } from "@comp/utils/constants";
import { ReservationType } from "@comp/utils/types";
import TimePickerMode from "@comp/reservation/timepicker/timePicker";

const Grid: FC = () => {
  const { reservations, setPickerTime } = useContext(ReservationContext);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [room, setRoom] = useState("");

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
    <div>
      <div className="flex">
        <TimePickerMode
          open={openTimePicker}
          setOpen={setOpenTimePicker}
          room={room}
        />
      </div>
      <div className="grid grid-flow-col auto-cols-auto relative">
        <Rooms />
        {labelHours.map((hour) => {
          return (
            <div key={hour}>
              <div className="h-10 justify-end flex translate-x-2 self-start items-end">
                {hour}
              </div>
              <Cell
                reservation={bigRoomReservations}
                hour={hour}
                setOpenTimePicker={setOpenTimePicker}
                setRoom={setRoom}
                room={ROOMS.med}
              />
              <Cell
                reservation={medRoomReservations}
                hour={hour}
                setOpenTimePicker={setOpenTimePicker}
                setRoom={setRoom}
                room={ROOMS.small}
              />
              <Cell
                reservation={smallRoomReservations}
                hour={hour}
                setOpenTimePicker={setOpenTimePicker}
                setRoom={setRoom}
                room={ROOMS.small}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
