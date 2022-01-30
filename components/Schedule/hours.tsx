import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SelectionBox from "./selectionBox";
import { hours } from "../../utils/constants";
import { outerBox, innerBox, grid } from "./sx";

const OuterBox = (props: { item: string }) => {
  return (
    <Box sx={outerBox}>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        {props.item}
      </Typography>
    </Box>
  );
};
const InnerBox = () => {
  return (
    <Box sx={innerBox}>
      <SelectionBox />
    </Box>
  );
};

const Hours: FC = () => {
  return (
    <Grid container wrap="nowrap" sx={grid}>
      {hours.map((hour, index) => {
        return (
          <div key={index}>
            <OuterBox item={hour} />
            <InnerBox />
            <InnerBox />
            <InnerBox />
            <OuterBox item={hour} />
          </div>
        );
      })}
    </Grid>
  );
};

export default Hours;
