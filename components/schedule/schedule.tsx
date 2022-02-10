import { FC, useState } from "react";
import HoursGrid from "./hoursGrid";
import RoomsGrid from "./roomsGrid";
import TimePickerMode from "@components/timepicker/timePicker";

const Schedule: FC = () => {
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [room, setRoom] = useState("");

  return (
    <div className="grid w-full">
      <div className="flex">
        <TimePickerMode
          open={openTimePicker}
          setOpen={setOpenTimePicker}
          room={room}
        />
      </div>
      <div className="flex w-full">
        <RoomsGrid />
        <HoursGrid setOpenTimePicker={setOpenTimePicker} setRoom={setRoom} />
      </div>
    </div>
  );
};

export default Schedule;
