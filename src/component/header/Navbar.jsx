import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav className="nav-container fixed right-0 rounded-b-sm border-gray-200 bg-gray-50 dark:bg-gray-800 z-50 p-4">
      <Link
        to="/"
        className="text-sm text-black dark:text-white w-[100px] hover:underline"
      >
        
        Welcome, <span className="text-blue-500 font-bold">{user?.name || "User"}</span>
      </Link>
    </nav>
  );
};

export default Navbar;
