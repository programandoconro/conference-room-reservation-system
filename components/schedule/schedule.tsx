import { FC } from "react";
import Hours from "./hours";
import Rooms from "./rooms";

const Schedule: FC = () => {
  return (
    <div className="schedule">
      <Rooms />
      <Hours />
    </div>
  );
};

export default Schedule;
