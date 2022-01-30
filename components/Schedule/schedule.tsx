import { FC } from "react";
import Hours from "./hours";
import Rooms from "./rooms";
import { Card, CardContent } from "@mui/material";

const Schedule: FC = () => {
  return (
    <div className="schedule">
      <Card elevation={5}>
        <CardContent sx={{ display: "flex" }}>
          <Rooms />
          <Hours />
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
