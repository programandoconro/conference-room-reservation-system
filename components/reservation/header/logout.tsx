import { useContext, FC } from "react";
import UserContext from "@comp/contexts/userContext";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Logout: FC = () => {
  const { setAuthenticated } = useContext(UserContext);
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
  };
  return (
    <button
      className=" p-1 hover:bg-orange-200 rounded transition"
      onClick={handleLogout}
    >
      <MeetingRoomIcon />
      Logout
    </button>
  );
};

export default Logout;
