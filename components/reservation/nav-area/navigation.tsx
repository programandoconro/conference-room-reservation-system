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
      <div className="flex justify-center align-middle">
        <button className="flex my-1  " onClick={handleYesterday}>
          <NavigateBeforeIcon />
          <h5>前の日</h5>
        </button>
        <div className="flex  mx-10 my-1 ">
          <h5>
            {date}（{getDayName(date)}）
          </h5>
        </div>
        <button className="flex my-1 " onClick={handleTomorrow}>
          <h5>次の日</h5>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
};

export default NavigationArea;
