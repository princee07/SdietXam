import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* Child pages will render here */}
      </main>
    </div>
  );
};

export default Layout;