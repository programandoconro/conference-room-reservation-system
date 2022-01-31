import { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Icon, Card, CardContent, Container } from "@mui/material";

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
    <Container>
      <Card
        raised={true}
        elevation={elevation}
        onMouseOut={handleHoverOut}
        onMouseOver={handleHoverOver}
        sx={{
          userSelect: "none",
        }}
      >
        <CardContent className="calendar-icon">
          <p>{date}</p>
          <Icon>
            <CalendarTodayIcon />
          </Icon>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CalendarIcon;
