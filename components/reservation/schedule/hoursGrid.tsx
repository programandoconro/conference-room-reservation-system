import { useState, useEffect, useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { rooms, hours } from "@comp/utils/constants";
import { getLimitTime } from "@comp/utils/requests";
import HeaderRow from "./headerRow";
import InnerBox from "./innerBox";
import UserContext from "@comp/contexts/userContext";

const HoursGrid = (props: {
  setRoom: (v: string) => void;
  setOpenTimePicker: (v: boolean) => void;
}) => {
  const { setOpenTimePicker, setRoom } = props;

  const [limitBigRoom, setLimitBigRoom] = useState(0);
  const [limitMedRoom, setLimitMedRoom] = useState(0);
  const [limitSmallRoom, setLimitSmallRoom] = useState(0);

  const { user } = useContext(UserContext);
  user.company &&
    getLimitTime(
      setLimitBigRoom,
      setLimitMedRoom,
      setLimitSmallRoom,
      user.company
    );

  const Rows = (props: { room: string }) => {
    return (
      <Grid
        className="w-full hover:bg-purple-200 border-b transition border-gray-200"
        container
        wrap="nowrap"
      >
        <Box className="flex justify-center items-center" minWidth={"80px"}>
          <Typography className="font-bold">{props.room}</Typography>
        </Box>
        {hours.map((hour, index) => {
          return (
            <div className="w-full" key={index}>
              <InnerBox
                hour={hour}
                room={props.room}
                limitBigRoom={limitBigRoom}
                limitMedRoom={limitMedRoom}
                limitSmallRoom={limitSmallRoom}
                setRoom={setRoom}
                setOpenTimePicker={setOpenTimePicker}
              />
            </div>
          );
        })}
      </Grid>
    );
  };
  return (
    <div className="flex w-full ">
      <div className="w-full">
        <HeaderRow />
        <Rows room={rooms[0]} />
        <Rows room={rooms[1]} />
        <Rows room={rooms[2]} />
      </div>
    </div>
  );
};

export default HoursGrid;
