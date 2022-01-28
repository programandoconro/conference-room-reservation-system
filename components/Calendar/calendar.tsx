import { useState, memo, useEffect, FC } from "react";
import { Card, CardContent } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import { formatDate } from "../../utils/formatDate";
import CalendarIcon from "./icon";

const CalendarComponent: FC = () => {
  const [elevation, setElevation] = useState(5);
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    registerLocale("ja", ja);
  }, []);

  return (
    <div>
      <div className="calendar-container">
        <main className="calendar-content">
          <Card raised={true} elevation={elevation}>
            <CardContent>
              <DatePicker
                locale={"ja"}
                onChange={(newDate) => {
                  newDate && setDate(formatDate(newDate));
                }}
                customInput={CalendarIcon({ date, setElevation })}
              />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default memo(CalendarComponent);
