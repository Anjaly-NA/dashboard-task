import React from "react";
import { Navigate } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView />  },
    ],
  },
  {
    path: "user",
    element: <DashboardLayout />,
    children: [
      // { path: "login", element: <LoginView /> },
      // { path: "register", element: <RegisterView /> },
    ],
  },
];

export default routes;
