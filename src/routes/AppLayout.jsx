import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../component/dashboard/Dashboard";
import Home from "../component/Home";
import Transaction from "../component/transaction/Transaction";
import Contest from "../component/contest/Contest";
import Game from "../component/games/Games";
import Users from "../component/user/Users";
import ViewContest from "../component/contest/ViewContest";
import ViewUserDetails from "../component/user/ViewUserDetails";
import ProtactedRoute from "./ProtactedRoute";
import CreateContest from "../component/contest/CreateContest";
import Banner from "../component/Banner/Banner";
import Profile from "../component/profile/Profile";

const AppLayout = () => {
  const location = useLocation();
  const hideHomeRoutes = ["/signin", "/signup", "/reset-password"];

  return (
    <div className="pr-8 my-20 pl-72">
      {!hideHomeRoutes.includes(location.pathname) && <Home />}

      <div className="">
        <Routes>
          <Route element={<ProtactedRoute />}>
            <Route path="/" element={<Dashboard />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/games" element={<Game />} />
            <Route path="/users" element={<Users />} />
            <Route path="/contest/:id" element={<ViewContest />} />
            <Route path="/user/:id" element={<ViewUserDetails />} />
            <Route path="/contest/create" element={<CreateContest />} />
            <Route path="/banner/upload" element={<Banner />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default AppLayout;
