import { grid, roomsBox } from "./sx";
import { Box, Grid, Typography } from "@mui/material";

const RoomsGrid = () => {
  const rooms = ["", "大会議室", "中会議室", "小会議室"];

  return (
    <Grid style={{ display: "grid" }} sx={grid}>
      {rooms.map((room, index) => {
        return (
          <div key={index} style={{ width: "100%" }}>
            <Box key={index} sx={roomsBox}>
              <Typography style={{ fontWeight: "bold" }}>{room}</Typography>
            </Box>
          </div>
        );
      })}
    </Grid>
  );
};
export default RoomsGrid;
