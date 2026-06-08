import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import useRackList from "../hooks/useRackList";

function Sidebar({ selectedRacks, setSelectedRacks }) {
  const { data = {}, isLoading, isError } = useRackList();

  const [activeGroup, setActiveGroup] = useState("");

  useEffect(() => {
    const keys = Object.keys(data);

    if (keys.length > 0) {
      const firstGroup = keys[0]; // CCR

      setActiveGroup(firstGroup);
      setSelectedRacks(data[firstGroup]);
    }
  }, [data, setSelectedRacks]);

  if (isLoading) {
    return (
      <aside className="w-40 bg-white border-r border-slate-200 shadow-sm flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <Spin />
        </div>
      </aside>
    );
  }

  if (isError) {
    return (
      <aside className="w-40 bg-white border-r border-slate-200 shadow-sm flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          Failed to load devices
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-40 bg-white border-r border-slate-200 shadow-sm flex flex-col">
      <div className="p-3 border-b border-slate-200">
        <h3 className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">
          Select Device
        </h3>
      </div>

      <div className="flex-1 p-2 overflow-auto">
        {Object.entries(data).map(([group, racks]) => (
          <div key={group} className="mb-4">
            <button
              onClick={() => {
                setActiveGroup(group);
                setSelectedRacks(racks);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeGroup === group
                  ? "bg-[#0F678F] text-white shadow"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-700"
              }`}
            >
              {group}
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;