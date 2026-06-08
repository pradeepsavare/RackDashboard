import React from "react";
import { Spin } from "antd";
import {
  MdBolt,
  MdThermostat,
  MdSensorDoor,
  MdDoorFront,
  MdCheckCircle,
  MdOutlineBatteryChargingFull,
  MdAcUnit,
  MdAir,
  MdSettingsInputComponent,
  MdSecurity,
  MdWaterDrop,
  MdMeetingRoom,
  MdLocalFireDepartment,
  MdWarning,
} from "react-icons/md";
import { GiRat } from "react-icons/gi";

function RackDashboard({ rackName, data, onBack }) {
 
  const sourceArray = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
      ? data.data
      : [];

  const rackData = sourceArray.map((d) => ({
    ...d,
    // use device_name as the friendly name for mapping
    zone_friendly_name: d.device_name || null,
  }));

  const findValue = (keyword) => {
    const item = rackData.find((d) =>
      d.device_name?.toLowerCase().includes(keyword.toLowerCase()),
    );
    // return null when missing so UI treats it as disabled
    return item ? item.value : null;
  };

  const findName = (keyword) => {
    const item = rackData.find((d) =>
      d.device_name?.toLowerCase().includes(keyword.toLowerCase()),
    );
    return item ? item.device_name : keyword;
  };

  const lastUpdated = data?.data?.[0]?.time || data?.[0]?.time || "-";

  const upsHealth = findValue("UPS Health Status");

  const status =
    upsHealth == null
      ? "-"
      : Number(upsHealth) === 0
        ? "Shutdown"
        : Number(upsHealth) <= 219
          ? "Alarm"
          : "Healthy";

  const formattedTime =
    lastUpdated !== "-"
      ? new Date(lastUpdated).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : "-";

  return (
    <div className="h-full flex flex-col min-h-0">
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="px-3 py-1 text-sm bg-[#0F678F] text-white rounded-lg hover:bg-[#0c5678]"
          >
            ← Back
          </button>

          <h2 className="text-lg font-semibold">{rackName}</h2>
        </div>

        <div className="text-sm text-gray-600 font-medium">
          Last Updated: {formattedTime}
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-2 flex-1 min-h-0 ">
        {/* COLUMN 1: Image Preview */}
        <div className="w-full lg:w-[25%] flex flex-col gap-2">
          <div className="relative w-full h-full bg-gray-50 rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <img
              src="/Rack.jpg"
              alt="Rack"
              className="w-full h-auto object-contain"
            />

            {/* Power Monitor Overlay */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
              style={{
                top: "6%",
                left: "15%",
                width: "42%",
                height: "14%",
              }}
            >
              <div className="grid grid-cols-2 gap-1 h-full">
                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300"
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Power A Current") || "Power A Load"}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(16px, 0.7vw, 18px)" }}
                  >
                    {findValue("Power A Current") == null
                      ? "-"
                      : `${Number(findValue("Power A Current")).toFixed(2)}A`}
                  </div>

                  <div
                    className="text-gray-300 mt-2"
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Power A KW") || "Power A KW"}
                  </div>

                  <div
                    className="font-semibold md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(16px, 0.7vw, 18px)" }}
                  >
                    {findValue("Power A KW") == null
                      ? "-"
                      : `${Number(findValue("Power A KW")).toFixed(2)}KW`}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300"
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Power B Current") || "Power B Load"}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(16px, 0.7vw, 18px)" }}
                  >
                    {findValue("Power B Current") == null
                      ? "-"
                      : `${Number(findValue("Power B Current")).toFixed(2)}A`}
                  </div>

                  <div
                    className="text-gray-300 mt-2 "
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Power B KW") || "Power B KW"}
                  </div>

                  <div
                    className="font-semibold md:text-base lg:text-lg "
                    // style={{ fontSize: "clamp(16px, 0.7vw, 18px)" }}
                  >
                    {findValue("Power B KW") == null
                      ? "-"
                      : `${Number(findValue("Power B KW")).toFixed(2)}KW`}
                  </div>
                </div>
              </div>
            </div>

            {/* front and rear temperature */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
              style={{
                top: "9%",
                left: "74%",
                width: "24%",
                height: "14%",
              }}
            >
              <div className="grid grid-cols-1 gap-1 h-full">
                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300"
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Front Temperature")}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-xl"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("Front Temperature") == null
                      ? "-"
                      : `${Math.round(Number(findValue("Front Temperature")))}°C`}
                  </div>

                  <div
                    className="text-gray-300 mt-2"
                    style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Rear Temperature")}
                  </div>

                  <div
                    className="font-semibold md:text-base lg:text-xl"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("Rear Temperature") == null
                      ? "-"
                      : `${Math.round(Number(findValue("Rear Temperature")))}°C`}
                  </div>
                </div>
              </div>
            </div>

            {/* front door */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1 place-items-center text-center"
              style={{
                top: "23%",
                left: "1.5%",
                width: "11.5%",
                height: "15%",
              }}
            >
              <div className="grid grid-cols-1 gap-1 h-full">
                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300 text-sm "
                    // style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Front Door")}
                  </div>

                  <div
                    className={`font-semibold md:text-sm lg:text-[9px]  py-1 px-1 rounded ${
                      findValue("Front Door") == null
                        ? "bg-gray-700 text-gray-300"
                        : findValue("Front Door") === 1
                          ? "bg-red-500 text-white"
                          : "bg-emerald-500 text-white"
                    }`}
                  >
                    {findValue("Front Door") == null
                      ? "-"
                      : findValue("Front Door") === 1
                        ? "OPEN"
                        : "CLOSE"}
                  </div>
                </div>
              </div>
            </div>

            {/* rear door */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1 place-items-center text-center"
              style={{
                top: "70%",
                left: "1.5%",
                width: "11.5%",
                height: "15%",
              }}
            >
              <div className="grid grid-cols-1 gap-1 h-full">
                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300 text-sm "
                    // style={{ fontSize: "clamp(7px, 0.45vw, 12px)" }}
                  >
                    {findName("Rear Door")}
                  </div>

                  <div
                    className={`font-semibold md:text-sm lg:text-[9px]  py-1 px-1 rounded ${
                      findValue("Rear Door") == null
                        ? "bg-gray-700 text-gray-300"
                        : findValue("Rear Door") === 1
                          ? "bg-red-500 text-white"
                          : "bg-emerald-500 text-white"
                    }`}
                  >
                    {findValue("Rear Door") == null
                      ? "-"
                      : findValue("Rear Door") === 1
                        ? "OPEN"
                        : "CLOSE"}
                  </div>
                </div>
              </div>
            </div>

            {/* UPS Status */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
              style={{
                top: "73%",
                left: "74%",
                width: "24%",
                height: "22%",
              }}
            >
              <div className="grid grid-cols-1 gap-1 h-full">
                <div className="flex flex-col justify-center items-center leading-none">
                  <div
                    className="text-gray-300"
                    style={{ fontSize: "clamp(12px, 0.5vw, 14px)" }}
                  >
                    {findName("UPS Load")}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("UPS Output Load") == null
                      ? "-"
                      : `${Math.round(Number(findValue("UPS Output Load")))}%`}
                  </div>

                  <div
                    className="text-gray-300 mt-2"
                    style={{ fontSize: "clamp(12px, 0.5vw, 14px)" }}
                  >
                    {findName("UPS Health")}
                  </div>

                  <div
                    className="font-semibold md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("UPS Battery Health") == null
                      ? "-"
                      : `${Math.round(Number(findValue("UPS Battery Health")))}%`}
                  </div>
                  <div
                    className="text-gray-300 mt-2"
                    style={{ fontSize: "clamp(12px, 0.5vw, 14px)" }}
                  >
                    {findName("UPS Runtime")}
                  </div>

                  <div
                    className="font-semibold md:text-base lg:text-lg"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)"}}
                  >
                    {findValue("Remaining Time") == null
                      ? "-"
                      : `${Math.round(Number(findValue("Remaining Time")))}m`}
                  </div>
                </div>
              </div>
            </div>

            {/* cooling Status */}
            <div
              className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
              style={{
                top: "26%",
                left: "74%",
                width: "24%",
                height: "43%",
              }}
            >
              <div className="grid grid-cols-1 gap-x-2 gap-y-1 h-full content-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center justify-center text-center border-b border-gray-100 pb-2">
                  <div className="text-[11px] text-gray-300 leading-tight ">
                    {findName("Cooling Panel")}
                  </div>

                  <div
                    className={`mt-0.5 min-w-[38px] px-1 py-[2px] text-[7px] font-semibold rounded-full uppercase  ${
                      findValue("Cooling Panel") == null
                        ? "bg-gray-700 text-gray-300"
                        : findValue("Cooling Panel") === 1
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {findValue("Cooling Panel") == null
                      ? "-"
                      : findValue("Cooling Panel") === 1
                        ? "ON"
                        : "OFF"}
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center justify-center text-center border-b border-gray-100 pb-2">
                  <div className="text-[11px] text-gray-300 leading-tight">
                    {findName("Cooling Panel Supply Temperature")}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-[15px]"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("Cooling Panel Supply Temperature") == null
                      ? "-"
                      : `${Math.round(Number(findValue("Cooling Panel Supply Temperature")))}°C`}
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center justify-center text-center border-b border-gray-100 pb-2">
                  <div className="text-[11px] text-gray-300 leading-tight">
                    {findName("Compressor")}
                  </div>

                  <div
                    className={`mt-0.5 min-w-[38px] px-1 py-[2px] text-[7px] font-semibold rounded-full uppercase ${
                      findValue("Compressor") == null
                        ? "bg-gray-700 text-gray-300"
                        : findValue("Compressor") === 1
                          ? "bg-emerald-500 text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {findValue("Compressor") == null
                      ? "-"
                      : findValue("Compressor") === 1
                        ? "ON"
                        : "OFF"}
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="text-[11px] text-gray-300 leading-tight">
                    {findName("Cooling Panel Return Temperature")}
                  </div>

                  <div
                    className="font-semibold text-gray-300 md:text-base lg:text-[15px]"
                    // style={{ fontSize: "clamp(12px, 0.7vw, 14px)" }}
                  >
                    {findValue("Cooling Panel Return Temperature") == null
                      ? "-"
                      : `${Math.round(Number(findValue("Cooling Panel Return Temperature")))}°C`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 2: Power & Security */}
        <div className="w-full lg:w-[28%] flex flex-col gap-2 ">
          {/* Card 1: Power Source */}
          <div className="h-[27%] bg-gray-50 p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-1 shrink-0">
              <MdBolt className="text-yellow-500 text-xl" />
              <div className="text-base font-semibold tracking-tight">
                Power Source (PDU)
              </div>
            </div>
            <div className="flex flex-col gap-1 flex-1 min-h-0">
              <div
                className={`flex-1 flex flex-col ${findValue("Power Source A") == null ? "bg-gray-100 rounded-lg p-1" : ""}`}
              >
                <PowerSourceItem
                  label={findName("Power Source A")}
                  value={findValue("Power Source A")}
                />
              </div>
              <div
                className={`flex-1 flex flex-col ${findValue("Power Source B") == null ? "bg-gray-100 rounded-lg p-1" : ""}`}
              >
                <PowerSourceItem
                  label={findName("Power Source B")}
                  value={findValue("Power Source B")}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Door Status */}
          <div className="h-[18%] bg-gray-50 p-1.5 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-1.5 mb-1 shrink-0">
              <MdMeetingRoom className="text-orange-500 text-xl" />
              <div className="text-base font-semibold tracking-tight">
                Door Status
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 flex-1 min-h-0">
              {/* Front Door */}
              <div
                className={`px-2 py-1 rounded-lg border shadow-sm flex flex-col justify-center ${findValue("Front Door") == null ? "bg-gray-100 border-gray-200" : "bg-white border-gray-100"}`}
              >
                <div className="text-[10px] xl:text-xs font-semibold text-gray-600 uppercase tracking-wide truncate">
                  {findName("Front Door")}
                </div>

                <div className="flex items-center justify-between mt-0.5">
                  {findValue("Front Door") === 1 ? (
                    <MdMeetingRoom className="text-2xl  text-red-500" />
                  ) : (
                    <MdSensorDoor
                      className={`text-2xl ${
                        findValue("Front Door") == null
                          ? "text-gray-400"
                          : "text-emerald-500"
                      }`}
                    />
                  )}

                  <div
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded uppercase ${
                      findValue("Front Door") == null
                        ? "bg-gray-300 text-gray-600"
                        : findValue("Front Door") === 1
                          ? "bg-red-500 text-white"
                          : "bg-emerald-500 text-white"
                    }`}
                  >
                    {findValue("Front Door") == null
                      ? "-"
                      : findValue("Front Door") === 1
                        ? "OPEN"
                        : "CLOSE"}
                  </div>
                </div>
              </div>

              {/* Rear Door */}
              <div
                className={`px-2 py-1 rounded-lg border shadow-sm flex flex-col justify-center ${findValue("Rear Door") == null ? "bg-gray-100 border-gray-200" : "bg-white border-gray-100"}`}
              >
                <div className="text-[10px] xl:text-xs font-semibold text-gray-600 uppercase tracking-wide truncate">
                  {findName("Rear Door")}
                </div>

                <div className="flex items-center justify-between mt-0.5">
                  {findValue("Rear Door") === 1 ? (
                    <MdMeetingRoom className="text-2xl text-red-500" />
                  ) : (
                    <MdSensorDoor
                      className={`text-2xl ${
                        findValue("Rear Door") == null
                          ? "text-gray-400"
                          : "text-emerald-500"
                      }`}
                    />
                  )}

                  <div
                    className={`px-1.5 py-0.5 text-[10px] font-bold rounded uppercase ${
                      findValue("Rear Door") == null
                        ? "bg-gray-300 text-gray-600"
                        : findValue("Rear Door") === 1
                          ? "bg-red-500 text-white"
                          : "bg-emerald-500 text-white"
                    }`}
                  >
                    {findValue("Rear Door") == null
                      ? "-"
                      : findValue("Rear Door") === 1
                        ? "OPEN"
                        : "CLOSE"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Security & UPS */}
          <div className="h-[58%] bg-gray-50 p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-2">
            {/* Security */}
            <div className="flex flex-col shrink-0">
              <div className="flex items-center gap-2 shrink-0">
                <MdSecurity className="text-rose-500 text-2xl" />
                <div className="text-lg font-semibold tracking-tight">
                  Security
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 mt-1">
                <SecurityItem
                  icon={<GiRat />}
                  label={findName("Rodant")}
                  value={findValue("Rodant")}
                />
                <SecurityItem
                  icon={<MdLocalFireDepartment />}
                  label={findName("Fire")}
                  value={findValue("Fire")}
                />
                <SecurityItem
                  icon={<MdWaterDrop />}
                  label={findName("Water Leak")}
                  value={findValue("Water Leak")}
                />
              </div>
            </div>

            {/* UPS Status */}
            <div className="flex flex-col flex-1 min-h-0 gap-1">
              <div className="flex items-center gap-2 shrink-0">
                <MdOutlineBatteryChargingFull className="text-emerald-500 text-2xl" />
                <div className="text-lg font-semibold tracking-tight">
                  UPS Status
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 text-center flex-1 min-h-0">
                <div
                  className={`p-3 rounded-xl border flex flex-col justify-center ${findValue("UPS Output Load") == null ? "bg-gray-100 border-gray-200 text-gray-400" : "bg-white border-gray-200"}`}
                >
                  <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                    UPS Load
                  </div>
                  <div
                    className={`text-2xl font-semibold leading-tight mt-2 ${findValue("UPS Output Load") == null ? "text-gray-400" : ""}`}
                  >
                    {findValue("UPS Output Load") == null
                      ? "-"
                      : `${Math.round(Number(findValue("UPS Output Load")))}%`}
                  </div>
                </div>
                <div
                  className={`p-3 rounded-xl border flex flex-col justify-center ${findValue("UPS Battery Health") == null ? "bg-gray-100 border-gray-200 text-gray-400" : "bg-white border-gray-200"}`}
                >
                  <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                    UPS Battry (%)
                  </div>
                  <div
                    className={`text-2xl font-semibold leading-tight mt-2 ${findValue("UPS Battery Health") == null ? "text-gray-400" : "text-emerald-500"}`}
                  >
                    {findValue("UPS Battery Health") == null
                      ? "-"
                      : `${Math.round(Number(findValue("UPS Battery Health")))}%`}
                  </div>
                </div>
                <div
                  className={`p-3 rounded-xl border flex flex-col justify-center ${findValue("UPS Health Status") == null ? "bg-gray-100 border-gray-200 text-gray-400" : "bg-white border-gray-200"}`}
                >
                  <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                    UPS Health Status
                  </div>
                  <div
                    className={`text-lg font-semibold leading-tight mt-2 ${
                      upsHealth == null
                        ? "text-gray-400"
                        : status === "Healthy"
                          ? "text-green-600"
                          : status === "Alarm"
                            ? "text-orange-500"
                            : "text-red-600"
                    }`}
                  >
                    {status}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: Electrical, Env, Climate */}
        <div
          className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden"
          style={{ flex: "1 1 0" }}
        >
          {/* Electrical Metrics */}
          <div
            className="bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm flex-1 flex flex-col min-h-0"
            style={{ flex: "1.1 1 0" }}
          >
            <div className="text-lg font-semibold tracking-tight flex items-center gap-2 mb-2 shrink-0">
              <MdBolt className="text-sky-600 text-2xl" /> Electrical Metrics
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              <ElectricalCard
                label={findName("Power Source A")}
                active={findValue("Power Source A")}
                vLabel={findName("Power A Voltage")}
                aLabel="Power A Load"
                kwhLabel="Power A KW"
                v={findValue("Power A Voltage")}
                a={findValue("Power A Current")}
                kwh={findValue("Power A KW")}
              />
              <ElectricalCard
                label={findName("Power Source B")}
                active={findValue("Power Source B")}
                vLabel={findName("Power B Voltage")}
                aLabel="Power B Load"
                kwhLabel="Power B KW"
                v={findValue("Power B Voltage")}
                a={findValue("Power B Current")}
                kwh={findValue("Power B KW")}
              />
            </div>
          </div>

          {/* Environmental Sensors */}
          <div
            className="bg-gray-50 p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col min-h-0"
            style={{ flex: "0.65 1 0" }}
          >
            <div className="flex items-center justify-between mb-1 shrink-0">
              <div className="text-base font-semibold tracking-tight flex items-center gap-1.5">
                <MdThermostat className="text-sky-600 text-xl" />
                Environmental Sensors
              </div>

              <div className="flex items-center gap-1">
                <MdThermostat className="text-amber-500 text-base" />
                <MdWaterDrop className="text-sky-500 text-base" />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-1">
              <EnvSection
                title="Front"
                isPrimary
                temp={findValue("Front Temperature")}
                humidity={findValue("Front Humidity")}
                tempLabel={findName("Front Temperature")}
                humidityLabel={findName("Front Humidity")}
                tempStatus="Optimal"
                humidityStatus="Normal"
              />
              <EnvSection
                title="Rear"
                isPrimary
                temp={findValue("Rear Temperature")}
                humidity={findValue("Rear Humidity")}
                tempLabel={findName("Rear Temperature")}
                humidityLabel={findName("Rear Humidity")}
                tempStatus="Nominal"
                humidityStatus="Normal"
              />
            </div>
          </div>

          {/* Cooling Control */}
          <div
            className="bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-col"
            style={{ flex: "0.7 1 0" }}
          >
            <div className="text-lg font-semibold tracking-tight flex items-center gap-2 mb-2 shrink-0">
              <MdAcUnit className="text-sky-600 text-2xl" /> Cooling Systems
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
              <ClimateCard
                icon={<MdAir />}
                label={findName("Cooling Panel")}
                value={findValue("Cooling Panel")}
              />
              <ClimateCard
                icon={<MdAir />}
                label={findName("Evaporator")}
                value={findValue("Evaporator")}
              />
              <ClimateCard
                icon={<MdSettingsInputComponent />}
                label={findName("Compressor")}
                value={findValue("Compressor")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PowerSourceItem = ({ label, value }) => (
  <div
    className={`flex items-center justify-between px-2 py-1.5 rounded-lg border shadow-sm h-full ${value == null ? "bg-gray-100 border-gray-200 text-gray-400" : "bg-white border-gray-200"}`}
  >
    <div className="flex items-center gap-2 min-w-0">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          value == null
            ? "bg-gray-100 text-gray-400"
            : Number(value) > 0
              ? "bg-emerald-50 text-emerald-600"
              : "bg-red-50 text-red-600"
        }`}
      >
        <MdBolt className="text-xl" />
      </div>

      <div className="min-w-0">
        <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide leading-none">
          Power Source
        </div>

        <div className="text-sm font-semibold truncate max-w-[110px] leading-tight">
          {label}
        </div>
      </div>
    </div>

    <div
      className={`${
        value == null
          ? "bg-gray-300 text-gray-600"
          : Number(value) > 0
            ? "bg-emerald-500 text-white"
            : "bg-red-500 text-white"
      } px-2.5 py-0.5 rounded-full text-xs font-bold uppercase shrink-0`}
    >
      {value == null ? "-" : Number(value) > 0 ? "ON" : "OFF"}
    </div>
  </div>
);

const SecurityItem = ({ icon, label, value }) => {
  const isAlarm = value === 1;
  const isDisabled = value == null || value === 0;

  return (
    <div
      className={`p-1.5 rounded-xl border shadow-sm flex flex-col justify-between items-center h-full transition-all ${
        isAlarm ? "bg-red-50 border-red-200" : "bg-gray-100 border-gray-200"
      }`}
    >
      {icon && (
        <div
          className={`text-2xl mb-1 ${
            isAlarm ? "text-red-500" : "text-gray-400"
          }`}
        >
          {icon}
        </div>
      )}

      <div
        className={`text-sm font-semibold uppercase tracking-widest mb-1 text-center ${
          isAlarm ? "text-red-700" : "text-gray-400"
        }`}
      >
        {label}
      </div>

      <div
        className={`px-2 py-0.5 text-sm font-semibold rounded uppercase text-center flex items-center justify-center gap-1 ${
          value == null
            ? "bg-gray-300 text-gray-600"
            : isAlarm
              ? "bg-red-500 text-white animate-[blink_1s_step-end_infinite]"
              : "bg-gray-400 text-white"
        }`}
      >
        {value == null ? (
          "-"
        ) : isAlarm ? (
          <>
            <MdWarning className="text-base" />
            ALARM
          </>
        ) : (
          "NORMAL"
        )}
      </div>
    </div>
  );
};

const EnvSection = ({
  title,
  isPrimary,
  temp,
  humidity,
  tempLabel,
  humidityLabel,
  tempStatus,
  humidityStatus,
}) => (
  <div className="flex flex-col h-full">
    <div className="text-sm font-semibold uppercase tracking-[0.12em] border-l-4 pl-2 mb-1 text-sky-600 border-sky-600">
      {title}
    </div>

    <div className="flex-1 grid grid-cols-2 gap-1">
      <div
        className={`p-1 rounded-lg border shadow-sm flex flex-col justify-center items-center ${
          temp == null
            ? "bg-gray-100 border-gray-200 text-gray-400"
            : "bg-white border-gray-100"
        }`}
      >
        <MdThermostat
          className={`text-lg mb-0.5 ${
            temp == null ? "text-gray-400" : "text-amber-500"
          }`}
        />

        <div
          className={`text-[10px] font-semibold uppercase tracking-wide text-center leading-tight ${
            temp == null ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {tempLabel}
        </div>

        <div
          className={`text-lg font-semibold ${
            temp == null ? "text-gray-400" : ""
          }`}
        >
          {temp == null ? "-" : Math.round(Number(temp))}
          <span className="text-[10px] font-semibold text-gray-600 ml-0.5">
            °C
          </span>
        </div>
      </div>

      <div
        className={`p-1 rounded-lg border shadow-sm flex flex-col justify-center items-center ${
          humidity == null
            ? "bg-gray-100 border-gray-200 text-gray-400"
            : "bg-white border-gray-100"
        }`}
      >
        <MdWaterDrop
          className={`text-lg mb-0.5 ${
            humidity == null ? "text-gray-400" : "text-sky-500"
          }`}
        />

        <div
          className={`text-[10px] font-semibold uppercase tracking-wide text-center leading-tight ${
            humidity == null ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {humidityLabel}
        </div>

        <div
          className={`text-lg font-semibold ${
            humidity == null ? "text-gray-400" : ""
          }`}
        >
          {humidity == null ? "-" : Math.round(Number(humidity))}
        </div>
      </div>
    </div>
  </div>
);

const ElectricalCard = ({
  label,
  active,
  vLabel,
  aLabel,
  kwhLabel,
  v,
  a,
  kwh,
}) => (
  // treat missing active as disabled for visuals and accessibility
  <div
    className={`bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-full `}
    aria-disabled={active == null}
    title={active == null ? "Data unavailable" : undefined}
  >
    <div
      className={`flex items-center justify-between px-3 py-1.5 border-b ${active == null ? "bg-gray-50 border-gray-200" : Number(active) > 0 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}
    >
      <div
        className={`text-xs font-semibold uppercase tracking-[0.15em] ${active == null ? "text-gray-500" : Number(active) > 0 ? "text-emerald-600" : "text-red-600"}`}
      >
        {label}
      </div>
      <MdBolt
        className={`text-xl ${active == null ? "text-gray-600" : Number(active) > 0 ? "text-emerald-500" : "text-red-500"}`}
      />
    </div>
    <div className="flex-1 grid grid-cols-3 divide-x divide-gray-200">
      <div
        className={`p-1.5 flex flex-col justify-center items-center ${v == null ? "text-gray-600" : ""}`}
      >
        <div className="text-[11px] font-semibold text-gray-600 uppercase  tracking-wide text-center">
          {vLabel}
        </div>
        <div className="text-base font-semibold tracking-tighter">
          {v == null ? "-" : Number(v).toFixed(2)}
          <span className="text-xs font-semibold text-gray-600 ml-0.5">V</span>
        </div>
      </div>
      <div
        className={`p-1.5 flex flex-col justify-center items-center ${a == null ? "text-gray-600" : ""}`}
      >
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {aLabel}
        </div>
        <div
          className={`text-xl font-semibold ${a == null ? "" : "text-sky-600"} tracking-tighter`}
        >
          {a == null ? "-" : Number(a).toFixed(2)}
          <span className="text-base font-semibold text-sky-400 ml-0.5">A</span>
        </div>
      </div>
      <div
        className={`p-1.5 flex flex-col justify-center items-center ${kwh == null ? "text-gray-600" : ""}`}
      >
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {kwhLabel}
        </div>
        <div
          className={`text-xl font-semibold ${kwh == null ? "" : "text-amber-500"} tracking-tighter`}
        >
          {kwh == null ? "-" : Number(kwh).toFixed(2)}
          <span className="text-base font-semibold text-amber-400 ml-0.5">
            KW
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ClimateCard = ({ icon, label, value }) => {
  const isOn = value === 1;
  // only treat as disabled when value is missing from API
  const isDisabled = value == null;

  return (
    <div
      className={`p-1.5 rounded-xl border shadow-sm flex flex-col items-center justify-center gap-2 h-full transition-all
        ${
          isDisabled
            ? "bg-gray-100 border-gray-200"
            : "bg-white border-emerald-100"
        }`}
    >
      <div className={`text-xl ${isOn ? "text-emerald-500" : "text-gray-400"}`}>
        {icon}
      </div>

      <div
        className={`text-xs font-semibold uppercase tracking-widest text-center ${
          isDisabled
            ? "text-gray-400"
            : isOn
              ? "text-gray-600"
              : "text-gray-600"
        }`}
      >
        {label}
      </div>

      <div
        className={`px-3 py-0.5 text-sm font-semibold tracking-[0.1em] rounded-full uppercase text-center ${
          isDisabled
            ? "bg-gray-300 text-gray-600"
            : isOn
              ? "bg-emerald-500 text-white"
              : "bg-red-500 text-white"
        }`}
      >
        {value == null ? "-" : isOn ? "ON" : "OFF"}
      </div>
    </div>
  );
};

export default RackDashboard;
