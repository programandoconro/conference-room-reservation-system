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
  const isReserved =
    color === "lightgrey" || color === "transparent"
      ? "border-x border-dashed"
      : "";
  return (
    <div
      className="w-full relative flex justify-center"
      style={{
        background: color,
        outline: border,
        outlineOffset: "-2px",
        opacity: "0.5",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-x border-dashed">
        <Typography className="bg-transparent" height={"39px"} />
      </div>
    </div>
  );
};

export default SelectionBox;
