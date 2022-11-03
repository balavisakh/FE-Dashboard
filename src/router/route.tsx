import { createBrowserRouter } from "react-router-dom";
import FrontPage from "../components/frontpage/FrontPage";
import LoginForm from "../components/loginform/LoginForm";
import RegisterForm from "../components/registerform/RegisterForm";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage/>
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);
