import { Container, Card, CardContent, Typography } from "@mui/material";

const News = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-end",
        justifyContent: "flex-end",
        maxHeight: "40vh",
        padding: "10px",
      }}
    >
      <Card>
        <CardContent>
          <Typography style={{ fontWeight: "lighter", fontSize: "12px" }}>
            News:
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
export default News;
