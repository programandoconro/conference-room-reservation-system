import { useContext } from "react";
import ReservationContext from "contexts/reservationContext";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import formatDate, { getDayName } from "@comp/utils/formatDate";
import add from "date-fns/add";
import sub from "date-fns/sub";

const NavigationArea = () => {
  const { date, setDate } = useContext(ReservationContext);

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
    <div className="flex  ">
      <div className="flex justify-center align-middle my-1">
        <button
          className="flex  hover:bg-purple-200 rounded transition"
          onClick={handleYesterday}
        >
          <NavigateBeforeIcon />
          前の日
        </button>
        <div className="flex mx-10  ">
          {date}（{getDayName(date)}）
        </div>
        <button
          className="flex  hover:bg-purple-200 rounded transition"
          onClick={handleTomorrow}
        >
          次の日
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default NavigationArea;
