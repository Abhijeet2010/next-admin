import React from "react";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Navbar from "@/components/Dashboard/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-2">
      <div className="w-1/4 text-wrap p-4 bg-[var(--bgSoft)] sticky h-full">
        <Sidebar />
      </div>

      <div className="w-full p-5 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
