import React from "react";
import "./login.css";
const Login = () => {
  return (
    <div className="Login-container h-screen w-screen grid grid-cols-3">
      <div className="col-1"></div>
      <div
        className="col-span-2 bg-[#1BADDE] trap"
        style={{ clipPath: " polygon(60% 0, 100% 0%, 100% 100%, 0% 100%)" }}
      ></div>
    </div>
  );
};

export default Login;
