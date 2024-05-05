/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/NavigationContext";

export const GuestLayout = () => {
  const { token } = useStateContext();
  const location = useLocation();

  

  // if (token) {
  //   return <Navigate to="/" />;
  // }

  return (
    <section className=" bg-blue-gray-50 w-full h-screen flex items-center justify-center">
      <Outlet />
    </section>
  );
};
