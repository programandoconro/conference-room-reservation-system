import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";

const hoverInColor = "#ebe5fe";
const hoverOutColor = "white";

const SelectionBox = (props: {
  color: string;
  japDate: string;
  room: string;
}) => {
  const { color, japDate, room } = props;
  const [bg, setBg] = useState<string>(hoverOutColor);
  const [isHover, setIshover] = useState<boolean>(false);
  const handleMouseEnter = () => {
    if (bg === "white") {
      setBg(hoverInColor);
      setIshover(true);
    }
  };
  const handleMouseLeave = () => {
    if (bg === hoverInColor) {
      setBg(hoverOutColor);
      setIshover(false);
    }
  };
  useEffect(() => {
    setBg(color);
  }, []);
  return (
    <div
      style={{
        backgroundColor: bg,
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover && (
        <Card
          style={{
            position: "absolute",
            zIndex: "100",
            bottom: "100%",
            backgroundColor: "#666666",
            color: "white",
            padding: "10px",
            width: "max-content",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{room}</Typography>
          <Typography>{japDate}</Typography>
        </Card>
      )}
      <Typography style={{ color: "transparent", height: "39px" }} />
    </div>
  );
};

export default SelectionBox;
