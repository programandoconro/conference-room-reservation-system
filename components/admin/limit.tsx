import { useEffect, useState } from "react";
import { Button, Card, Container, Input, Typography } from "@mui/material";
import { getLimitTime, postLimitTime } from "@components/utils/requests";

const Limit = () => {
  const [limitBigRoom, setLimitBigRoom] = useState(0);
  const [limitMedRoom, setLimitMedRoom] = useState(0);
  const [limitSmallRoom, setLimitSmallRoom] = useState(0);
  useEffect(() => {
    getLimitTime(setLimitBigRoom, setLimitMedRoom, setLimitSmallRoom);
  }, []);

  const handleChange = (
    room: string,
    target: string,
    setState: (n: number) => void
  ) => {
    if (Number(target) >= 0) {
      postLimitTime(room, target);
      setState(Number(target));
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="subtitle1">制限間「週」:</Typography>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "fit-content",
          padding: "10px",
          flexDirection: "column",
          minWidth: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Typography paddingRight={"10px"}>大会議室</Typography>
          <Input
            type="number"
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
            onChange={(e) => {
              handleChange("大会議室", e.target.value, setLimitBigRoom);
            }}
            value={limitBigRoom}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Typography paddingRight={"10px"}>中会議室</Typography>
          <Input
            type="number"
            onChange={(e) => {
              handleChange("中会議室", e.target.value, setLimitMedRoom);
            }}
            value={limitMedRoom}
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <Typography paddingRight={"10px"}>小会議室</Typography>
          <Input
            type="number"
            onChange={(e) => {
              handleChange("小会議室", e.target.value, setLimitSmallRoom);
            }}
            value={limitSmallRoom}
            style={{
              paddingLeft: "10px",
              width: "40px",
            }}
          />
        </div>
      </Card>
    </Container>
  );
};

export default Limit;
