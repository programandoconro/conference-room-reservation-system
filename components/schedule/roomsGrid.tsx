import { useContext } from "react";
import { grid, box } from "./sx";
import theme from "utils/theme";
import { Box, Grid, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";
import { getDayName, getMonth, getDayFormat } from "utils/formatDate";

const RoomsGrid = () => {
  const { date } = useContext(ReservationContext);
  const day = getDayFormat(date);
  const month = getMonth(date);
  const dayName = getDayName(date);

  const japDate = `${month}/${day}(${dayName})`;
  const rooms = [japDate, "大会議室", "中会議室", "小会議室", japDate];

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
