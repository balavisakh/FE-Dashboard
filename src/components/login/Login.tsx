import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    }
  return (
    <Button onClick={navigateToLogin} variant="contained">Login</Button>
  );
};
