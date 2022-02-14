import { useContext } from "react";
import Logout from "./logout";
import Info from "./info";
import News from "./news";
import UserContext from "@comp/contexts/userContext";
import { Button, Typography } from "@mui/material";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <div>
          <div>
            <Typography
              style={{
                fontWeight: "lighter",
                fontSize: "10px",
                paddingBottom: 0,
                margin: 0,
              }}
            >
              ようこそ
            </Typography>
            <Typography
              style={{ fontWeight: "bold", paddingTop: 0, margin: 0 }}
            >
              {user?.name}様
            </Typography>
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
      <div style={{ display: "flex", maxHeight: "40vh", overflowY: "scroll" }}>
        <News />
        <Info />
      </div>
    </div>
  );
};

export default Header;
