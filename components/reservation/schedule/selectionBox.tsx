import { useState } from "react";
import { Typography } from "@mui/material";

const SelectionBox = (props: { color: string }) => {
  const { color } = props;
  const [border, setBorder] = useState<string>("transparent");

  const handleMouseEnter = () => {
    if (color === "transparent") {
      setBorder("2px solid purple");
    }
  };
  const handleMouseLeave = () => {
    if (color === "transparent") {
      setBorder("transparent");
    }
  };
  const isReservation = (): string => {
    if (color === "transparent") {
      return "0.5px dashed lightgrey";
    } else if (color === "lightgrey") {
      return "0.5px dashed white";
    }
    return "none";
  };
  return (
    <div
      className="w-full relative flex justify-center"
      style={{
        background: color,
        outline: border,
        outlineOffset: "-2px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ borderRight: isReservation() }}>
        <Typography className="bg-transparent" height={"39px"} />
      </div>
    </div>
  );
};

export default SelectionBox;
