import { useState, FC, useContext } from "react";
import CalendarIcon from "./calendar-icon";
import { Button, Modal, TextField } from "@mui/material";
import formatDate from "utils/formatDate";
import ReservationContext from "contexts/reservationContext";
import { DatePicker } from "@mui/lab";

const CalendarComponent: FC = () => {
  const [open, setOpen] = useState(false);
  const { date, setDate } = useContext(ReservationContext);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleChange = (d: string) => {
    try {
      const newDate = formatDate(new Date(d));
      console.log(newDate);
      !newDate.startsWith("0") && setDate(newDate);
    } catch (e) {
      console.log("not a valid date");
    }
  };

  return (
    <div>
      <div className="calendar-container">
        <div onClick={handleOpen}>
          <DatePicker
            okText="OK"
            mask="____/__/__"
            className="calendar-date-picker"
            open={open}
            value={date}
            onChange={(e) => e && handleChange(e)}
            renderInput={(params) => <TextField {...params} />}
            onClose={handleCloseModal}
            inputFormat="yyyy/MM/dd"
          >
            <Button
              className="calendar-close-button"
              onClick={handleCloseModal}
              size="small"
              style={{
                position: "absolute",
                right: "-25px",
                color: "grey",
              }}
            >
              x
            </Button>
          </DatePicker>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;
