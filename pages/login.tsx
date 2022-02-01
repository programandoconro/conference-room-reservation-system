import { useState, useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { isEmail, isPassword } from "@components/utils/checkers";
import { loginUser } from "@components/utils/requests";
import { useRouter } from "next/router";
import UserContext from "@components/contexts/userContext";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthenticated } = useContext(UserContext);

  const handleLogin = async () => {
    const isValid = isEmail(email) && isPassword(password);
    console.log(email, password);
    if (isValid) {
      const response = await loginUser({ email, password });

      if (response && response.status === 200) {
        setAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        router.push("/reservations");
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
          />
          <TextField
            className="login-item"
            placeholder="password"
            type="password"
            label="パスワード"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            サインイン
          </Button>
          <Typography className="signup-item">
            アカウントがありませんか？{" "}
            <a className="signup-link" href="/signup">
              登録
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
