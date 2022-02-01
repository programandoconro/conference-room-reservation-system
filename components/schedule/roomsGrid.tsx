import { useContext } from "react";
import { grid, box } from "./sx";
import theme from "utils/theme";
import { Box, Grid, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";

const RoomsGrid = () => {
  const { date } = useContext(ReservationContext);
  const day = date.slice(-2);
  const month = date.slice(5, 7);

  const japDate = `${day}/${month}月`;
  const rooms = [japDate, "会議室１", "会議室２", "会議室3", japDate];

  return (
    <Grid style={{ display: "grid" }} sx={grid}>
      {rooms.map((room, index) => {
        return (
          <div key={index} style={{ width: "100%" }}>
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
export default RoomsGrid;
