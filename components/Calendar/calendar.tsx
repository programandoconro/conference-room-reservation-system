import { useState, memo, useEffect } from "react";
import { Button, Card, CardContent, Input, Icon } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { formatDate } from "../../utils/formatDate";

const CalendarComponent = () => {
  const [elevation, setElevation] = useState(5);
  const [date, setDate] = useState(formatDate(new Date()));

  useEffect(() => {
    registerLocale("ja", ja);
  }, []);

  const handleHoverOver = () => {
    setElevation(10);
  };
  const handleHoverOut = () => {
    setElevation(5);
  };

  return (
    <div>
      <div className="calendar-container">
        <main className="calendar-content">
          <Card raised={true} elevation={elevation}>
            <CardContent>
              <DatePicker
                locale={"ja"}
                onChange={(d) => {
                  d && setDate(formatDate(d));
                }}
                customInput={
                  <div
                    onMouseOut={handleHoverOut}
                    onMouseOver={handleHoverOver}
                  >
                    <Input type={"date"} disabled={true} value={date} />
                    <Icon>
                      <CalendarTodayIcon />
                    </Icon>
                  </div>
                }
              />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default memo(CalendarComponent);
