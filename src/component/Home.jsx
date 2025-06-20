import React from "react";
import Sidebar from "./header/Sidebar";
import Navbar from "./header/Navbar";

const Home = () => {
  return (
    <div className="w-full flex justify-between items-start">
      <div className="">
        <Sidebar />
      </div>

      <div className="w-[84%] fixed right-0 top-0  overflow-y-auto ">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
