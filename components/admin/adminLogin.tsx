import { useState, useContext } from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import { isEmail, isPassword } from "@comp/utils/checkers";
import { loginAdmin } from "@comp/utils/requests";
import AdminContext from "@comp/contexts/adminContext";
import { getLimitTime } from "@comp/utils/requests";
import LimitsContext from "@comp/contexts/limitsContext";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const { setAuthAdmin, setAdmin } = useContext(AdminContext);

  const { limits, setLimits } = useContext(LimitsContext);

  const handleLogin = async () => {
    const isValid = isEmail(email) && isPassword(password);
    if (isValid) {
      const response = await loginAdmin({ email, password, company });

      console.log(response);
      if (response && response.status === 200) {
        setAuthAdmin(true);
        setAdmin({
          company: company,
          email: response.data.email,
          password: response.data.password,
        });
        company && getLimitTime({ company, setLimits });
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
            placeholder="会社名"
            label="会社名"
            onChange={(e) => setCompany(e.target.value)}
          />
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

          <button
            className="bg-blue-800 m-1 w-full rounded hover:bg-blue-400 transition"
            onClick={handleLogin}
          >
            <h5 className="text-white p-1">サインイン</h5>
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
