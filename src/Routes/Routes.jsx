import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/destination",
        element: <PrivateRoute><Destination></Destination></PrivateRoute>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
