import { Container, Card, CardContent, Typography } from "@mui/material";

const News = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        overflowY: "scroll",
        margin: "10px",
        border: "1px solid black",
      }}
    >
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
    </Container>
  );
};
export default News;
