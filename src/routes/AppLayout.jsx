import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import SignIn from "../component/auth/SignIn";
import Dashboard from "../component/dashboard/Dashboard";
import Home from "../component/Home";
import Profile from "../component/user/Profile";
import Transaction from "../component/transaction/Transaction";
import Contest from "../component/contest/Contest";
import Game from "../component/games/Games";
import Users from "../component/user/Users";
import ViewContest from "../component/contest/ViewContest";
import ViewUserDetails from "../component/user/ViewUserDetails";

const AppLayout = () => {
  const location = useLocation();
  const hideHomeRoutes = ["/signin", "/signup", "/reset-password"];

  return (
    <div className="pr-8 my-20 pl-72">
      {!hideHomeRoutes.includes(location.pathname) && <Home />}

      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/games" element={<Game />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contest/:id" element={<ViewContest />} />
          <Route path="/user/:id" element={<ViewUserDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
