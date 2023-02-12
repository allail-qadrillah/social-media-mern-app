import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Layout from "components/layout/index";
import { createBrowserRouter } from "react-router-dom";

export const ROOT = '/'
export const LOGIN = '/login'
export const REGISTER = '/register'

export const PROTECTED = '/protected'
export const DASHBOARD = `${PROTECTED}/dashboard`
export const USERS = `${PROTECTED}/users`
export const PROFILE = `${PROTECTED}/profile/:id`

export const router = createBrowserRouter([
  { path: ROOT, element: 'ROOT' },
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: PROTECTED, 
    element: <Layout />, 
    children:[
      { path: DASHBOARD, element: 'DASHBOARD' },
      { path: USERS, element: 'USERS' },
      { path: PROFILE, element: 'PROFILE' },
    ]},
])