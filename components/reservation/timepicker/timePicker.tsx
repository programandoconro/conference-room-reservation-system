import { useContext } from "react";
import TimePicker from "@mui/lab/TimePicker";
import { TextField, Typography } from "@mui/material";
import UserContext from "@comp/contexts/userContext";
import ReservationContext from "@comp/contexts/reservationContext";
import { getTimestamp } from "@comp/utils/formatDate";
import { TimePickerType } from "@comp/utils/types";
import { postReservation } from "@comp/utils/requests";
import { isSameRoom, isInsideDate, isSameDay } from "@comp/utils/constrains";

const TimePickerMode = (props: TimePickerType) => {
  const { room } = props;

  const { user } = useContext(UserContext);
  const {
    date,
    setReservations,
    reservations,
    pickerTime,
    setPickerTime,
    openPicker,
    setOpenPicker,
  } = useContext(ReservationContext);

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
        const resStart = new Date(res.start).getHours();
        const resEnd = new Date(res.end).getHours();

        const pickerStart = new Date(
          String(pickerTime.start?.toString())
        ).getHours();

        const pickerEnd = new Date(
          String(pickerTime.end?.toString())
        ).getHours();

        if (
          isInsideDate({ resStart, resEnd, pickerEnd, pickerStart }) &&
          isSameRoom({ room, res }) &&
          isSameDay({ date, res })
        ) {
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
    setOpenPicker(false);
  };

  return (
    <div>
      {openPicker && (
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
          <div className="flex items-center gap-1">
            <button
              className="bg-blue-300 w-10 h-10 ml-1 rounded hover:bg-blue-500"
              onClick={handleSetReservation}
            >
              OK
            </button>
            <button
              className="border h-10 p-1 bg-gray-100 rounded hover:bg-gray-200 transition"
              onClick={() => setOpenPicker(false)}
            >
              クローズ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePickerMode;
