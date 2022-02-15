import { useState, FC, useContext } from "react";
import { TextField } from "@mui/material";
import formatDate from "@comp/utils/formatDate";
import ReservationContext from "contexts/reservationContext";
import { DatePicker } from "@mui/lab";

const CalendarComponent: FC = () => {
  const [open, setOpen] = useState(false);
  const { date, setDate } = useContext(ReservationContext);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (d: string) => {
    try {
      const newDate = formatDate(new Date(d));
      !newDate.startsWith("0") && setDate(newDate);
    } catch (e) {
      console.log("not a valid date");
    }
  };
  const handleToday = () => {
    setDate(formatDate(new Date()));
  };

  return (
    <div>
      <div className="flex m-1 p-1">
        <div onClick={handleOpen}>
          <DatePicker
            mask="____/__/__"
            className="calendar-date-picker"
            open={open}
            value={date}
            onChange={(e) => e && handleChange(e)}
            renderInput={(params) => <TextField {...params} />}
            onClose={handleClose}
            inputFormat="yyyy/MM/dd"
          />
        </div>
        <button
          className="m-1 bg-blue-700 rounded w-14 h-8 self-center hover:bg-blue-600 transition"
          onClick={handleToday}
        >
          <h5 className="text-white">今日</h5>
        </button>
      </div>
    </div>
  );
};

export default CalendarComponent;
