import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Home } from "../pages/home/Home";
import ApodPage from "../pages/apod/ApodPage";
import MrpPage from "../pages/mrp/MrpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apod",
        element: <ApodPage />,
      },
      {
        path: "/mrp",
        element: <MrpPage />,
      },
    ],
  },
]);

export default router;
