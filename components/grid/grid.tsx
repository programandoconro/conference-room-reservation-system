import { FC, useContext, useState } from "react";
import ReservationContext from "@comp/contexts/reservationContext";
import UserContext from "@comp/contexts/userContext";
import Rooms from "./rooms";
import Cell from "./cells";
import { labelHours, ROOMS } from "@comp/utils/constants";
import { ReservationType } from "@comp/utils/types";
import TimePickerMode from "@comp/reservation/timepicker/timePicker";

const Grid: FC = () => {
  const { reservations } = useContext(ReservationContext);
  const { user } = useContext(UserContext);
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
      <div className="grid grid-flow-col auto-cols-auto relative border-b">
        <Rooms />
        {labelHours.map((hour) => {
          const hourReservation = String(Number(hour) - 1);
          return (
            <div key={hour}>
              <div className="flex justify-end translate-x-2 h-10 items-end">
                <div className="absolute">{hour}</div>
              </div>
              <div className="border-t">
                <Cell
                  reservation={bigRoomReservations}
                  hour={hourReservation}
                  setOpenTimePicker={setOpenTimePicker}
                  setRoom={setRoom}
                  room={ROOMS.big}
                  company={user.company}
                />
              </div>
              <Cell
                reservation={medRoomReservations}
                hour={hourReservation}
                setOpenTimePicker={setOpenTimePicker}
                setRoom={setRoom}
                room={ROOMS.med}
                company={user.company}
              />
              <Cell
                reservation={smallRoomReservations}
                hour={hourReservation}
                setOpenTimePicker={setOpenTimePicker}
                setRoom={setRoom}
                room={ROOMS.small}
                company={user.company}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
