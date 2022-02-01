import { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { isEmail, isPassword } from "utils/checkers";
import { signUpUser } from "utils/requests";
import { UserType } from "utils/types";
import UserContext from "contexts/userContext";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { authenticated, setAuthenticated } = useContext(UserContext);

  const handleSignUp = async () => {
    const user: UserType = {
      company,
      name,
      email,
      password,
    };
    const isValid =
      isEmail(email) && isPassword(password) && password === confirmPassword;
    if (isValid) {
      const response = await signUpUser(user);
      console.log(response);
      if (response && response.status === 200) {
        alert("User created successfully");
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
            登録
          </Typography>
        </Container>
        <CardContent className="login-card">
          <TextField
            className="login-item"
            placeholder="名前"
            label="名前"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className="login-item"
            placeholder="メールアドレス"
            label="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="login-item"
            placeholder="会社"
            label="会社"
            onChange={(e) => setCompany(e.target.value)}
          />

          <TextField
            className="login-item"
            placeholder="パスワード"
            type="password"
            label="パスワード"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            className="login-item"
            placeholder="パスワードの確認"
            type="password"
            label="パスワード"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            onClick={handleSignUp}
          >
            登録
          </Button>
          <Typography className="signup-item">
            もうアカウントがありますか？{" "}
            <a className="signup-link " href="/login">
              サインイン{" "}
            </a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
