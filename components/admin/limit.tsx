import { useEffect, useState } from "react";
import { Button, Container, Input, Typography } from "@mui/material";
import axios from "axios";

const Limit = () => {
  const [limitBigRoom, setLimiBigRoom] = useState(0);
  const [limitMedRoom, setLimiMedRoom] = useState(0);
  const [limitSmallRoom, setLimiSmallRoom] = useState(0);

  const handleChange = async (
    room: string,
    target: string,
    setState: (n: number) => void
  ) => {
    if (Number(target) >= 0) {
      await axios.post("/api/limits", {
        room: room,
        week: target,
      });
      setState(Number(target));
    }
  };
  return (
    <Container>
      <Typography>週</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Typography>大会議室</Typography>
        <Input
          type="number"
          onChange={(e) => {
            handleChange("大会議室", e.target.value, setLimiBigRoom);
          }}
          value={limitBigRoom}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Typography>中会議室</Typography>
        <Input
          type="number"
          onChange={(e) => {
            handleChange("中会議室", e.target.value, setLimiMedRoom);
          }}
          value={limitMedRoom}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        <Typography>小会議室</Typography>
        <Input
          type="number"
          onChange={(e) => {
            handleChange("小会議室", e.target.value, setLimiSmallRoom);
          }}
          value={limitSmallRoom}
        />
      </div>
      <Button variant="contained">設定する</Button>
    </Container>
  );
};

export default Limit;
