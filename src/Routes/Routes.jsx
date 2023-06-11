import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Dashboard from "../Layout/Dashboard";

import MyClass from "../pages/Dashboard/MyClass/MyClass";
import AddNewClass from "../pages/Dashboard/AddNewClass/AddNewClass";
import MySelectedClasses from "../pages/Dashboard/StudentDashboard/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import Payment from "../pages/Dashboard/StudentDashboard/Payment/Payment";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addNewClass",
        element: <AddNewClass></AddNewClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
    ],
  },
]);
export default router;
