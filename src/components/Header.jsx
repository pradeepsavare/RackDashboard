import React from "react";
import { Select, Avatar } from "antd";
import { DesktopOutlined, UserOutlined } from "@ant-design/icons";

const devices = [
  { value: "rack-1", label: "Rack 1" },
  { value: "rack-2", label: "Rack 2" },
  { value: "rack-3", label: "Rack 3" },
];

function Header() {
  return (
    <header className="h-13 bg-white border-b border-emerald-200 shadow-sm px-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center w-1/4">
        <img
          src="hindalco_logo.png"
          alt="Logo"
          className="h-10 w-20 object-fill "
        />
      </div>

      {/* Title */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-slate-800 tracking-wide">
          Rack Monitoring Dashboard
        </h1>
        <div className="w-24 h-1 bg-cyan-500 rounded-full mt-1"></div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        {/* Rack Selector */}
        {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-xl">
          <DesktopOutlined className="text-emerald-600" />

          <Select
            size="small"
            variant="borderless"
            defaultValue="rack-1"
            options={devices}
            style={{ width: 90 }}
          />
        </div> */}
        {/* New Image */}
        <div className=" rounded-xl px-3  shadow-sm">
          <img
            src="hexmesh_logo.png"
            alt="IESG Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 via-sky-600 to-cyan-400"></div>
    </header>
  );
}

export default Header;
