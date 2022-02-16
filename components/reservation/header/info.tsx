import { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";
import UserContext from "@comp/contexts/userContext";
import { isBefore } from "date-fns";

const Info = () => {
  const { reservations, date } = useContext(ReservationContext);
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col w-1/3 bg-slate-100 p-1 mt-1 overflow-y-auto">
      {reservations
        .slice(0)
        .reverse()
        .map((res, key) => {
          const timeStart = new Date(res.start).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const timeEnd = new Date(res.end).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <div key={key} className="">
              {user.company === res.company &&
                (isBefore(new Date(date), new Date(res.date)) ||
                  res.date === date) && (
                  <Card
                    className="flex min-w-full mt-2 w-8/12 "
                    style={{
                      backgroundColor: date === res.date ? "yellow" : "white",
                    }}
                  >
                    <CardContent>
                      <Typography
                        style={{ fontWeight: "lighter", fontSize: "12px" }}
                      >
                        {res.date} {timeStart} - {timeEnd}
                        {res.room}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
            </div>
          );
        })}
    </div>
  );
};
export default Info;
