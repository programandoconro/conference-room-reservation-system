import { useState, FC, useContext } from "react";
import DatePicker from "react-datepicker";
import CalendarIcon from "./calendar-icon";
import { Button, Modal } from "@mui/material";
import formatDate from "../../utils/formatDate";
import ReservationContext from "../Contexts/ReservationContext";

const CalendarComponent: FC = () => {
  const [open, setOpen] = useState(false);
  const { date, setDate } = useContext(ReservationContext);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="calendar-container">
        <div onClick={handleOpenModal}>
          <CalendarIcon date={date} />
        </div>
        <Modal
          open={open}
          onBackdropClick={handleCloseModal}
          closeAfterTransition={true}
        >
          <div className="calendar-modal">
            <DatePicker
              className="calendar-date-picker"
              open={true}
              onSelect={handleCloseModal}
              locale={"ja"}
              onChange={(newDate) => {
                newDate && setDate(formatDate(newDate));
              }}
              customInput={<></>}
              popperPlacement="bottom"
              showPopperArrow={false}
              disabledKeyboardNavigation={true}
            >
              <Button
                className="calendar-close-button"
                onClick={handleCloseModal}
                size="small"
              >
                x
              </Button>
            </DatePicker>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CalendarComponent;
