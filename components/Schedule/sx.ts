import theme from "utils/theme";

export const outerBox = {
  borderRight: 0.5,
  borderBottom: 0.5,
  borderColor: theme.palette.secondary.light,
  userSelect: "none",
  display: "flex",
  minHeight: "40px",
  justifyContent: "center",
};
export const innerBox = {
  borderBottom: 0.5,
  borderRight: 0.5,
  borderColor: theme.palette.secondary.light,
  userSelect: "none",
  display: "flex",
  width: "100%",
};
export const grid = {
  borderTop: 0.5,
  borderLeft: 0.5,
  borderColor: theme.palette.secondary.light,
  display: "flex",
  justifyContent: "center",
};
export const box = {
  borderBottom: 0.5,
  borderColor: theme.palette.secondary.light,
  display: "flex",
  height: "40px",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "80px",
};
