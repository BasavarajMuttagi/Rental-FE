import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Detail from "../Pages/Detail";
import Payment from "../Pages/Payment";
import FavoriteLayout from "../Layouts/FavoriteLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Loader from "../components/Loader";
import MyBookings from "../components/MyBookings";


const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/loading",
        element: <Loader />,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/car/:id",
        element: <Detail />,
      },

      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/favorite",
        element: <FavoriteLayout />,
      },
      {
        path: "/bookings",
        element: <MyBookings />,
      },
    ],
  },
]);

export default routes;
