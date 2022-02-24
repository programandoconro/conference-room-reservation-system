import { useContext } from "react";
import TimePicker from "@mui/lab/TimePicker";
import { TextField, Typography } from "@mui/material";
import UserContext from "@comp/contexts/userContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { getTimestamp } from "@comp/utils/formatDate";
import { ReservationType, TimePickerType } from "@comp/utils/types";
import { postReservation } from "@comp/utils/requests";

const TimePickerMode = (props: TimePickerType) => {
  const { open, setOpen, room } = props;

  const { user } = useContext(UserContext);
  const { date, setReservations, reservations, pickerTime, setPickerTime } =
    useContext(ReservationContext);

  const handleSetReservation = () => {
    if (pickerTime.start && pickerTime.end) {
      const newID: number = Math.floor(Math.random() * 100000000) + 1;
      const reservation = {
        company: user.company,
        name: user.name,
        email: user.email,
        date: date,
        start: String(pickerTime.start),
        end: String(pickerTime.end),
        room: room,
        timestamp: getTimestamp(),
        id: newID,
      };

      let available = true;
      reservations.forEach((res) => {
        console.log(new Date(res.start), pickerTime.start);
        const equalDate =
          new Date(res.start).getHours() ===
            new Date(String(pickerTime.start?.toString())).getHours() &&
          new Date(res.end).getHours() ===
            new Date(String(pickerTime.end?.toString())).getHours();

        const insideDateCase1 =
          new Date(res.start).getHours() <=
            new Date(String(pickerTime.start?.toString())).getHours() &&
          new Date(res.end).getHours() >=
            new Date(String(pickerTime.end?.toString())).getHours();
        const insideDateCase2 =
          new Date(res.start).getHours() >=
            new Date(String(pickerTime.start?.toString())).getHours() &&
          new Date(res.end).getHours() <=
            new Date(String(pickerTime.end?.toString())).getHours();
        let isInsideDate = insideDateCase1 || insideDateCase2 || equalDate;

        if (isInsideDate && res.room === room) {
          console.log("same time");
          available = false;
        }
      });
      if (available) {
        setReservations([...reservations, reservation]);
        postReservation(reservation);
      } else {
        alert("not available");
      }
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
              value={pickerTime.start}
              onChange={(e) => e && setPickerTime({ ...pickerTime, start: e })}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <Typography className="flext text-center p-1 self-center">
            ~
          </Typography>
          <div className="w-36">
            <TimePicker
              value={pickerTime.end}
              onChange={(e) => e && setPickerTime({ ...pickerTime, end: e })}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <button onClick={handleSetReservation}>OK</button>
        </div>
      )}
    </div>
  );
};

export default TimePickerMode;
