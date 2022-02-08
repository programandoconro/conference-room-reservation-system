import { useContext } from "react";
import header from "./main-header.png";
import Image from "next/image";
import Logout from "./logout";
import UserContext from "@components/contexts/userContext";
import { Container, Typography } from "@mui/material";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Typography paddingRight={"10px"}>Welcome</Typography>
      <Typography sx={{ fontWeight: "bold" }} paddingRight={"10px"}>
        {user?.name}さん
      </Typography>
      <div className="logout-button">
        <Logout />
      </div>
    </div>
  );
};

export default Header;
