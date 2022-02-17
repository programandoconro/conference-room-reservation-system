import { Typography } from "@mui/material";

const News = () => {
  return (
    <div className="overflow-y-auto p-1 h-1/2 mt-1 border border-solid border-black">
      <Typography
        variant="overline"
        style={{ fontWeight: "lighter", fontSize: "12px" }}
      >
        News:
      </Typography>
      <Typography
        style={{
          fontWeight: "lighter",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography
        style={{
          fontWeight: "lighter",
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </div>
  );
};
export default News;
