import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import '../../assets/css/loader.css'

export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <div className="loader"></div>
    </div>
  );
};
