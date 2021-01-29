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
import Gallery from "./views/gallery/Gallery";
import Payment from "./views/payment/Payment";
import Multistep from "./components/Multistep";
import Covid from "./views/covid/Covid";

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
      { path: "checkout", element: <Multistep /> },
      { path: "payment", element: <Payment /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "customer", element: <Customer /> },
      { path: "product", element: <Product /> },
      { path: "gallery", element: <Gallery /> },
      { path: "covid", element: <Covid /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
