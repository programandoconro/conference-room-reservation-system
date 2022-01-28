import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Input, Icon } from "@mui/material";

const CalendarIcon = (props: {
  date: string;
  setElevation: (e: number) => void;
}) => {
  const { setElevation, date } = props;

  const handleHoverOver = () => {
    setElevation(10);
  };
  const handleHoverOut = () => {
    setElevation(5);
  };
  return (
    <div onMouseOut={handleHoverOut} onMouseOver={handleHoverOver}>
      <Input type={"date"} disabled={true} value={date} />
      <Icon>
        <CalendarTodayIcon />
      </Icon>
    </div>
  );
};

export default CalendarIcon;
