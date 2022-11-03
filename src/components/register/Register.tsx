import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate("/register")
    }
  return(
    <Button onClick={navigateToRegister} variant="outlined">Register</Button>
    );
};

