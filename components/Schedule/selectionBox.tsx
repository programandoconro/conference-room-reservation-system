import { useState } from "react";
import { Typography } from "@mui/material";
import theme from "utils/theme";

const hoverInColor = theme.palette.primary.main;
const clickColor = theme.palette.success.main;
const hoverOutColor = "white";

const SelectionBox = () => {
  const [bg, setBg] = useState<string>(hoverOutColor);
  const handleClick = () => {
    setBg(clickColor);
  };
  const handleMouseEnter = () => {
    bg !== clickColor && setBg(hoverInColor);
  };
  const handleMouseLeave = () => {
    bg !== clickColor && setBg(hoverOutColor);
  };
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography style={{ color: "transparent", height: "39px" }}>
        i
      </Typography>
    </div>
  );
};

export default SelectionBox;
