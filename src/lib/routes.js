import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = '/'
export const LOGIN = '/login'
export const REGISTER = '/register'

export const router = createBrowserRouter([
  { path: ROOT, element: 'ROOT' },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register/>},
])