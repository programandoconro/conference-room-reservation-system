import { useState } from "react";

const SelectionBox = (props: { color: string; message?: string }) => {
  const { color, message } = props;
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
  const isWritable: boolean = color !== "transparent" && color !== "lightgrey";
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
        <div
          className="bg-transparent overflow-hidden"
          style={{
            height: "39px",
            fontWeight: "lighter",
            fontSize: "6px",
          }}
        >
          {isWritable && message && message}
        </div>
      </div>
    </div>
  );
};

export default SelectionBox;
