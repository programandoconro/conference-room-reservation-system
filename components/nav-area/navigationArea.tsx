import { useContext } from "react";
import ReservationContext from "contexts/reservationContext";
import { Button, Card, CardContent, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import formatDate from "@components/utils/formatDate";
import { buttonStyle } from "./sx";
import add from "date-fns/add";
import sub from "date-fns/sub";

const NavigationArea = () => {
  const { date, setDate } = useContext(ReservationContext);

  const handleToday = () => {
    setDate(formatDate(new Date()));
  };
  const handleTomorrow = () => {
    const tomorrow = add(new Date(date), {
      days: 1,
    });
    setDate(formatDate(tomorrow));
  };
  const handleYesterday = () => {
    const yesterday = sub(new Date(date), {
      days: 1,
    });
    setDate(formatDate(yesterday));
  };
  return (
    <div className="navigation-container">
      <CardContent className="navigation-card">
        <Button variant="contained" sx={buttonStyle} onClick={handleYesterday}>
          <NavigateBeforeIcon />
        </Button>
        <Button variant="contained" sx={buttonStyle} onClick={handleToday}>
          <Typography>今日</Typography>
        </Button>
        <Button variant="contained" sx={buttonStyle} onClick={handleTomorrow}>
          <NavigateNextIcon />
        </Button>
      </CardContent>
    </div>
  );
};

export default NavigationArea;
