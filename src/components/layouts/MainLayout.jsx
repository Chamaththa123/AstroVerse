import React, {  useEffect } from "react";
import {  Outlet, Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/NavigationContext";
import {Header} from "./Header";

export const MainLayout = () => {
  const { token, setUser, setToken } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const userString = queryParams.get("user");
    const token = queryParams.get("token");
    if (userString) {
      const user = JSON.parse(userString);
      setUser(user);
      setToken(token);
    }
  }, [location.search]);

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <section className="bg-white w-full min-h-screen flex">
      <section className="w-[100%] md:w-[100%] flex flex-col gap-10 ">
        {/* <Header/> */}
        <Outlet />
      </section>
    </section>
  );
};
