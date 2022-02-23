import { useState, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { isEmail, isPassword } from "@comp/utils/checkers";
import { loginUser, getReservations } from "@comp/utils/requests";
import UserContext from "@comp/contexts/userContext";
import Link from "next/link";
import { buttonStyle, inputStyle } from "../../pages/signup";
import ReservationContext from "@comp/contexts/reservationContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthenticated, user, setUser } = useContext(UserContext);
  const { setReservations } = useContext(ReservationContext);

  const handleLogin = async () => {
    const isValid = isEmail(email) && isPassword(password);
    if (isValid) {
      const response = await loginUser({ email, password });

      if (response && response.status === 200) {
        setAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        setUser({
          name: response.data.name,
          company: response.data.company,
          email: response.data.email,
          password: response.data.password,
        });

        // router.push("/reservations");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login">
      <Card elevation={5}>
        <Container>
          <Typography className="login-item" variant="h5">
            サインイン
          </Typography>
        </Container>
        <CardContent className="login-card">
          <TextField
            className="login-item"
            placeholder="email"
            label="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <TextField
            className="login-item"
            placeholder="password"
            type="password"
            label="パスワード"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={buttonStyle}
          >
            サインイン
          </Button>
          <Typography className="signup-item">
            アカウントがありませんか？{" "}
            <Link href={"/signup"}>
              <a className="signup-link">登録</a>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
