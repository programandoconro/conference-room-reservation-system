import { useState, memo, useEffect } from "react";
import { Card, CardContent, Input, TextField } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";

const CalendarComponent = () => {
  const [value, setValue] = useState(undefined);
  const [elevation, setElevation] = useState(5);
  useEffect(() => {
    registerLocale("ja", ja);
  }, []);
  return (
    <div>
      <div className="calendar-container">
        <main className="calendar-content">
          <Card
            raised={true}
            elevation={elevation}
            onMouseOut={() => setElevation(5)}
            onMouseOver={() => setElevation(10)}
          >
            <CardContent>
              <DatePicker locale={"ja"} onChange={() => {}} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default memo(CalendarComponent);
