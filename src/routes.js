import React from "react";
import { Navigate } from "react-router-dom";
import LoginView from "./views/user/LoginView";
import RegisterView from "./views/user/RegisterView";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views/dashboard/index";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView /> },
    ],
  },
  {
    path: "user",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      // { path: "register", element: <RegisterView /> },
    ],
  },
];

export default routes;
