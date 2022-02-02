import { FC } from "react";
import HoursGrid from "./hoursGrid";
import RoomsGrid from "./roomsGrid";

const Schedule: FC = () => {
  return (
    <div className="schedule">
      <RoomsGrid />
      <HoursGrid />
      <RoomsGrid />
    </div>
  );
};

export default Schedule;
