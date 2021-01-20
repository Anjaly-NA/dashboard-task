import React from "react";
import { Navigate } from "react-router-dom";
import LoginView from "./views/user/LoginView";
import RegisterView from "./views/user/RegisterView";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./views/dashboard/index";
import TermsConditions from "./views/user/TermsConditions";
import PageNotFound from "./views/error/PageNotFound";
import Customer from "./views/customer/index";
import Product from "./views/product/index";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "login", element: <LoginView /> },
      { path: "register", element: <RegisterView /> },
      { path: "termsconditios", element: <TermsConditions /> },
      { path: "404", element: <PageNotFound /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "user",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "customer", element: <Customer /> },
      { path: "product", element: <Product /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
