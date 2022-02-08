import { useContext, FC } from "react";
import UserContext from "@components/contexts/userContext";
import { Button } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Logout: FC = () => {
  const { setAuthenticated } = useContext(UserContext);
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
  };
  return (
    <Button
      style={{
        backgroundColor: "white",
        fontSize: "18px",
        color: "black",
      }}
      onClick={handleLogout}
    >
      <MeetingRoomIcon />
      Logout
    </Button>
  );
};

export default Logout;
