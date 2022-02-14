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
      </div>
    </div>
  );
};

export default CalendarComponent;
