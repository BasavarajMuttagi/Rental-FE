import { createBrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import Detail from "../Pages/Detail";
import Payment from "../Pages/Payment";
import FavoriteLayout from "../Layouts/FavoriteLayout";

const routes = createBrowserRouter([
  {
    element: <PublicRoutes />,
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
    ],
  },
]);

export default routes;
