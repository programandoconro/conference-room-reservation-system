import { useContext } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import ReservationContext from "contexts/reservationContext";
import UserContext from "@comp/contexts/userContext";
import { isBefore } from "date-fns";
import { ReservationType } from "@comp/utils/types";
import { deleteReservation, getReservations } from "@comp/utils/requests";

const Info = () => {
  const { reservations, setReservations, date } =
    useContext(ReservationContext);
  const { user } = useContext(UserContext);

  const handleDelete = (id: number) => {
    let newReservations: ReservationType[] = [];
    reservations
      .slice(0)
      .reverse()
      .filter((reservation: ReservationType, key: number) => {
        if (key !== id) {
          newReservations.push(reservation);
        } else if (key === id) deleteReservation(user.company, reservation.id);
      });
    setReservations(newReservations.reverse());
  };
  const handleEdit = (id: number) => {};
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
                      backgroundColor: date === res.date ? "#fef08a" : "white",
                    }}
                  >
                    <CardContent>
                      <Typography
                        style={{ fontWeight: "lighter", fontSize: "12px" }}
                      >
                        {res.date} {timeStart} - {timeEnd}
                        {res.room}
                        <button>
                          <h5 className="pl-2 text-blue-700 text-xs hover:text-blue-500">
                            編集
                          </h5>
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(key);
                          }}
                        >
                          <h5 className="pl-2 text-blue-700 text-xs hover:text-blue-500">
                            削除
                          </h5>
                        </button>
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
