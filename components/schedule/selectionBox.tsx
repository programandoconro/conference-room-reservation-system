import { useState } from "react";
import { Typography } from "@mui/material";

const SelectionBox = (props: { color: string }) => {
  const { color } = props;
  const [border, setBorder] = useState<string>("white");

  const handleMouseEnter = () => {
    if (color === "transparent") {
      setBorder("2px solid purple");
    }
  };
  const handleMouseLeave = () => {
    if (color === "transparent") {
      setBorder("white");
    }
  };
  return (
    <div
      className="w-full relative flex justify-center"
      style={{
        backgroundColor: color,
        outline: border,
        outlineOffset: "-2px",
        opacity: "0.5",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border border-dashed">
        <Typography className="bg-transparent" height={"39px"} />
      </div>
    </div>
  );
};

export default SelectionBox;
