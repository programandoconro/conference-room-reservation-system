import { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Card, CardContent, Container, Typography } from "@mui/material";

const CalendarIcon = (props: { date: string }) => {
  const [elevation, setElevation] = useState(5);
  const { date } = props;

  const handleHoverOver = () => {
    setElevation(10);
  };
  const handleHoverOut = () => {
    setElevation(5);
  };
  return (
    <Container
      style={{
        padding: "0",
      }}
    >
      <Card
        raised={true}
        elevation={elevation}
        onMouseOut={handleHoverOut}
        onMouseOver={handleHoverOver}
        sx={{
          userSelect: "none",
        }}
        style={{
          display: "flex",
          height: "60px",
        }}
      >
        <CardContent className="calendar-icon">
          <Typography style={{ fontWeight: "lighter" }}>{date}</Typography>
          <CalendarTodayIcon />
        </CardContent>
      </Card>
    </Container>
  );
};

export default CalendarIcon;
