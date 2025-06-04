import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Navbar from "../components/Navbar";
import SignUp from "../pages/SignUp";

const Layout = () => {
  let userInfo = JSON.parse(localStorage.getItem("UserName-Account"));

  if (!userInfo) {
    return <Navigate to={"/signin"} />;
  }
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
