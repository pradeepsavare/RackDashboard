import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Layout() {
  const [selectedRacks, setSelectedRacks] = useState([]);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedRacks={selectedRacks}
          setSelectedRacks={setSelectedRacks}
        />

        <main className="flex-1 bg-slate-200 p-2 overflow-auto">
          <Outlet
            context={{
              selectedRacks,
            }}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;