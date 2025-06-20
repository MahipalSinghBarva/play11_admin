import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <nav class="w-full border-gray-200 bg-gray-50 dark:bg-gray-800 ">
      <div class="flex  justify-between items-center  p-4">
        <a
          href="https://flowbite.com"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          /> */}
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Play11
          </span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
          {/* <a
            href="tel:5541251234"
            class="text-sm  text-gray-500 dark:text-white hover:underline"
          >
            (555) 412-1234
          </a> */}
          <a href="#" class="text-sm  text-white   hover:underline">
            Welcome, {user?.name || "User"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
