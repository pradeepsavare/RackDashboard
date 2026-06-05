import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-slate-200 p-2 overflow-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;