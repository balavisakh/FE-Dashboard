import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import { matButton } from "../button";
export const Login = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login")
    }
    return(
    <Button onClick={navigateToLogin} variant="contained">Login</Button>
    )
    // <>
    /* {matButton(navigateToLogin,'contained','Login')} */
    // {matButton}
    // <matButton/>
    // </>
  
};
