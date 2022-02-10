import { Box, Grid, Typography } from "@mui/material";

const RoomsGrid = () => {
  const rooms = ["", "大会議室", "中会議室", "小会議室"];

  return (
    <Grid>
      {rooms.map((room, index) => {
        return (
          <div key={index}>
            <Box
              className="flex justify-center items-center"
              height={"40px"}
              minWidth={"80px"}
              key={index}
            >
              <Typography className="font-bold">{room}</Typography>
            </Box>
          </div>
        );
      })}
    </Grid>
  );
};
export default RoomsGrid;
