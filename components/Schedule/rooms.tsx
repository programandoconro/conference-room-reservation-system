import { useContext } from "react";
import { grid, box } from "./sx";
import theme from "utils/theme";
import { Box, Grid, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";

const Rooms = () => {
  const { date } = useContext(ReservationContext);
  const rooms = [date, "room1", "room2", "room3", date];
  return (
    <Grid container wrap="nowrap" sx={grid} style={{ display: "grid" }}>
      {rooms.map((room, index) => {
        return (
          <div key={index}>
            {index === 0 || index === rooms.length - 1 ? (
              <Box
                sx={box}
                style={{
                  backgroundColor: theme.palette.secondary.light,
                  border: 0,
                }}
              >
                <Typography>{room}</Typography>
              </Box>
            ) : (
              <Box key={index} sx={box}>
                <Typography>{room}</Typography>
              </Box>
            )}
          </div>
        );
      })}
    </Grid>
  );
};
export default Rooms;
