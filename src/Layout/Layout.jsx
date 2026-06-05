import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import useRackDetails from "../hooks/useRackDetails";
import useRackList from "../hooks/useRackList";

function Layout() {
  const [selectedRack, setSelectedRack] = useState(null);

  const { data: rackList = [] } = useRackList();

  useEffect(() => {
    if (rackList.length > 0 && !selectedRack) {
      setSelectedRack(rackList[0]);
    }
  }, [rackList, selectedRack]);

  const {
    data,
    isLoading: itemsLoading,
    isError,
  } = useRackDetails(selectedRack);
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          selectedRack={selectedRack}
          setSelectedRack={setSelectedRack}
        />

        <main className="flex-1 bg-slate-200 p-2 overflow-auto">
          <Outlet
            context={{
              data,
              itemsLoading,
              isError,
              selectedRack,
            }}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;