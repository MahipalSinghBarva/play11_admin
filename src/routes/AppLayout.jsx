import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "../component/auth/SignIn";
import Dashboard from "../component/dashboard/Dashboard"
import Home from "../component/Home"
const AppLayout = () => {
  const location = useLocation();
  const hideHomeRoutes = ["/signin", "/signup", "/reset-password"];

  return (
    <div className="pl-72 pr-8 my-20">
      {!hideHomeRoutes.includes(location.pathname) && <Home />}

      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
