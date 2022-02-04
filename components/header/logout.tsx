import { useContext, FC } from "react";
import UserContext from "@components/contexts/userContext";
import { Button } from "@mui/material";

const Logout: FC = () => {
  const { setAuthenticated } = useContext(UserContext);
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
  };
  return (
    <Button variant="contained" color="secondary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
