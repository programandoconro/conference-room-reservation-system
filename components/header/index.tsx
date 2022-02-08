import { useContext } from "react";
import header from "./main-header.png";
import Image from "next/image";
import Logout from "./logout";
import UserContext from "@components/contexts/userContext";
import { Container, Typography, Button } from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px",
      }}
    >
      <div>
        <div>
          <h5 style={{ paddingBottom: 0, margin: 0 }}>ようこそ</h5>
          <h4 style={{ paddingTop: 0, margin: 0 }}>{user?.name}様</h4>
        </div>
      </div>
      <Button
        style={{
          backgroundColor: "white",
          fontSize: "18px",
          color: "black",
        }}
      >
        <LiveHelpIcon />
      </Button>
      <Logout />
    </div>
  );
};

export default Header;
