import { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { isEmail, isPassword } from "@comp/utils/checkers";
import { signUpUser } from "@comp/utils/requests";
import { UserType } from "@comp/utils/types";
import UserContext from "@comp/contexts/userContext";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAuthenticated, setUser } = useContext(UserContext);

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
        setAuthenticated(true);
        setUser({
          name: response.data.name,
          company: response.data.company,
          email: response.data.email,
          password: response.data.password,
        });
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
    } else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="login">
      <Card elevation={5}>
        <Container>
          <Typography className="login-item" variant="h5" style={inputStyle}>
            登録
          </Typography>
        </Container>
        <CardContent className="login-card">
          <TextField
            className="login-item"
            placeholder="名前"
            label="名前"
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <TextField
            className="login-item"
            placeholder="会社"
            label="会社"
            onChange={(e) => setCompany(e.target.value)}
            style={inputStyle}
          />
          <TextField
            className="login-item"
            placeholder="メールアドレス"
            label="メールアドレス"
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <TextField
            className="login-item"
            placeholder="パスワード"
            type="password"
            label="パスワード"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <TextField
            className="login-item"
            placeholder="パスワードの確認"
            type="password"
            label="パスワード"
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            onClick={handleSignUp}
            style={buttonStyle}
          >
            登録
          </Button>
          <Typography className="signup-item">
            もうアカウントがありますか？{" "}
            <Link href={"/"}>
              <a className="signup-link ">サインイン </a>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export const inputStyle = {
  paddingBottom: "2%",
  paddingTop: "2%",
  marginTop: "2%",
  width: "100%",
};
export const buttonStyle = {
  padding: "16px",
  border: "none",
  cursor: "pointer",
  opacity: "0.9",
  margin: "2%",
  display: "block",
  width: "100%",
  marginTop: "4%",
};
export default SignUp;
