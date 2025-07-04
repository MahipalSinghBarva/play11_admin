import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  Award,
  BanknoteArrowDown,
  FileCheck,
  GalleryThumbnails,
  Gamepad,
  Gamepad2,
  IndianRupee,
  LayoutDashboard,
  LoaderPinwheel,
  LogOut,
  NotebookTabs,
  UserCog,
  UserPen,
  Wallet,
} from "lucide-react";
import { FileInput } from "flowbite-react";
import { logout } from "../../store/slice/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard color="#00b3ff" strokeWidth={2.5} size={20} />,
    },
    {
      name: "Contest",
      path: "/contest",
      icon: <Gamepad color="#00b3ff" strokeWidth={2.5} size={20} />,
    },
    {
      name: "Banner",
      path: "/banner/upload",
      icon: <GalleryThumbnails color="#00b3ff" strokeWidth={2} size={20} />,
    },
    {
      name: "User",
      path: "/users",
      icon: <UserCog size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Transaction",
      path: "/Transaction",
      icon: <IndianRupee size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Game",
      path: "/games",
      icon: <Gamepad2 size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Match",
      path: "/matchs",
      icon: <LoaderPinwheel size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Point",
      path: "/points",
      icon: <NotebookTabs size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Coupon",
      path: "/coupons",
      icon: <Award size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "KYC",
      path: "/kyc",
      icon: <FileCheck size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
    {
      name: "Withdrow Request",
      path: "/withdrow-request",
      icon: <Wallet size={20} color="#00b3ff" strokeWidth={2.5} />,
    },
   
  ];

  const handleItemClick = (path) => {
    setSelectedItem(path);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800 flex flex-col pb-5"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h1 className="text-[#00b3ff] text-center text-2xl font-bold py-5">
            Play11
          </h1>
          <ul class="space-y-2 font-medium flex flex-col justify-between ">
            {menuItems.map((item) => (
              <li
                key={item.path}
                onClick={() => handleItemClick(item.path)}
                className={`${selectedItem === item.path
                  ? "bg-gray-700 text-white"
                  : "text-gray-500 "
                  }   cursor-pointer transition-all duration-100 rounded-lg flex items-center px-2`}
              >
                <span> {item.icon}</span>
                <Link
                  to={item.path}
                  class={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group ${selectedItem === item.path ? "text-white" : "text-gray-900"
                    }`}
                >
                  <span class="">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <hr className="text-[#00b3ff] mx-2 my-2" />
          <Link
            to={"/profile"}
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group text-white"
          >
            <UserPen size={20} color="#00b3ff" strokeWidth={2.5} />
            <span class="ms-3">Profile</span>
          </Link>
          <Link
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 group text-white"
          >
            <LogOut size={20} color="#00b3ff" strokeWidth={2.5} />
            <span class="ms-3" onClick={handleLogout}>Sign Out</span>
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
