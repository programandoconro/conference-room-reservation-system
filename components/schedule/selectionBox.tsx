import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import theme from "utils/theme";

const hoverInColor = theme.palette.success.main;
const reservationColor = theme.palette.primary.main;
const hoverOutColor = "white";

const SelectionBox = (props: { color: string }) => {
  const [bg, setBg] = useState<string>(hoverOutColor);
  const handleMouseEnter = () => {
    bg !== reservationColor && setBg(hoverInColor);
  };
  const handleMouseLeave = () => {
    bg !== reservationColor && setBg(hoverOutColor);
  };
  useEffect(() => {
    setBg(props.color);
  }, []);
  return (
    <div
      style={{
        backgroundColor: bg,
        width: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography style={{ color: "transparent", height: "39px" }} />
    </div>
  );
};

export default SelectionBox;
