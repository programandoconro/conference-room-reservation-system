import { useContext, useState } from "react";
import TimePicker from "@mui/lab/TimePicker";
import { TextField, Button, Typography } from "@mui/material";
import UserContext from "@comp/contexts/userContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { getTimestamp, getTime } from "@comp/utils/formatDate";
import { TimePickerType } from "@comp/utils/types";
import { postReservation } from "@comp/utils/requests";

const TimePickerMode = (props: TimePickerType) => {
  const { open, setOpen, room } = props;

  const { user } = useContext(UserContext);
  const { date, setReservations, reservations } =
    useContext(ReservationContext);

  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const handleSetReservation = () => {
    if (startTime && endTime) {
      const reservation = {
        company: user.company,
        name: user.name,
        email: user.email,
        date: date,
        start: getTime(startTime),
        end: getTime(endTime),
        room: room,
        timestamp: getTimestamp(),
      };

      setReservations([...reservations, reservation]);
      postReservation(reservation);
    } else {
      // alert("時間を選択してください");
    }
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <div className="flex">
          <div className="w-36">
            <TimePicker
              value={startTime}
              onChange={(e) => setStartTime(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <Typography className="flext text-center p-1 self-center">
            ~
          </Typography>
          <div className="w-36">
            <TimePicker
              value={endTime}
              onChange={(e) => setEndTime(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <Button onClick={handleSetReservation}>OK</Button>
        </div>
      )}
    </div>
  );
};

export default TimePickerMode;
