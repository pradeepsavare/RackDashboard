import React, { useState } from "react";
import { DesktopOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import useRackList from "../hooks/useRackList";

function Sidebar({ selectedRack, setSelectedRack }) {
  const { data = [], isLoading, isError } = useRackList();
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
        {data.map((rack) => (
          <button
            key={rack}
            onClick={() => {
              setSelectedRack(rack);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2 mb-2 rounded-lg text-sm font-medium transition-all ${
              selectedRack === rack
                ? "bg-[#0F678F] text-white shadow"
                : "bg-slate-50 hover:bg-slate-100 text-slate-700"
            }`}
          >
           

            {rack}
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
