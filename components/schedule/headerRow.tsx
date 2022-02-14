import { Grid, Box, Typography } from "@mui/material";
import { hours } from "utils/constants";

const OuterBox = (props: { item: string }) => {
  return (
    <Box
      className="flex justify-end select-none absolute "
      style={{
        transform: "translateX(-7px) translateY(-30px)",
      }}
      minHeight={"40px"}
    >
      <Typography
        className="flex self-center"
        fontSize="12px"
        fontWeight={"lighter"}
      >
        {props.item}
      </Typography>
    </Box>
  );
};
const HeaderRow = () => {
  return (
    <Grid className="w-full" container wrap="nowrap">
      <div className=" flex w-full">
        <Box className="flex justify-center items-center " minWidth={"80px"}>
          <Typography className="font-bold" />
        </Box>
        {hours.map((hour, index) => {
          return (
            <div className="w-full" key={index}>
              <OuterBox item={hour} />
            </div>
          );
        })}
      </div>
    </Grid>
  );
};

export default HeaderRow;
