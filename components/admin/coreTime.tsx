import { useState, useEffect } from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";

const CoreTime = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px",
        minWidth: "400px",
      }}
    >
      <Typography variant="subtitle1">コアタイム</Typography>
      <Card style={{ minWidth: "200px" }}>
        <CardContent></CardContent>
      </Card>
    </Container>
  );
};

export default CoreTime;
