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

function RackDashboard() {
  // const { data, itemsLoading, devices } = useOutletContext();
  // console.log(data);
  const data = {
    rack_data: {
      value: [
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186017,
          zone_name: "485 Based Board Input-1",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power Source A",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 1,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186018,
          zone_name: "485 Based Board Input-2",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power Source B",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 0,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186019,
          zone_name: "485 Based Board Input-3",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Front Door Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 1,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186020,
          zone_name: "485 Based Board Input-4",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Rear Door Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 0,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186021,
          zone_name: "485 Based Board Input-5",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Front Temperature",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 25,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186022,
          zone_name: "485 Based Board Input-6",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Rear Temperature",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 24,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186023,
          zone_name: "485 Based Board Input-7",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Front Humidity",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 57,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186024,
          zone_name: "485 Based Board Input-8",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Rear Humidity",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 56,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186025,
          zone_name: "485 Based Board Input-9",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power A Voltage",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 240,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186026,
          zone_name: "485 Based Board Input-10",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power A Current",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 15,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186027,
          zone_name: "485 Based Board Input-11",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power B Voltage",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 230,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD21",
          zone_id: 186028,
          zone_name: "485 Based Board Input-13",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Power B Current",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 14,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD22",
          zone_id: 186029,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "UPS Output Load",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 74,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD22",
          zone_id: 186030,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "UPS Battery Health",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 0,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD22",
          zone_id: 186031,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "UPS Battery Remaining Time",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: 120,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD23",
          zone_id: 186032,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Fire Alarm Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD24",
          zone_id: 186033,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Rodant Detection Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD25",
          zone_id: 186034,
          zone_name: "485 Based Board Input-14",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Cooling Panel Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD25",
          zone_id: 186035,
          zone_name: "485 Based Board Input-15",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Evaporator Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD25",
          zone_id: 186036,
          zone_name: "485 Based Board Input-16",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Compressor Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
        {
          panel_no: "iam-office-testing-10129223",
          device_code: "MOD26",
          zone_id: 186037,
          zone_name: "485 Based Board Input-1",
          device_template_name: "Office Made 16 Io-Board",
          zone_friendly_name: "Water Leak Detection Status",
          device_tag_name: "Rack",
          device_tag_code: "RACK",
          value: null,
          last_updated_time: null,
        },
      ],
      name: "Rack Data",
      unit: "",
    },
    last_communication_time: null,
  };

  const rackData = data?.rack_data?.value || [];

  const findValue = (keyword) => {
    const item = rackData.find((d) =>
      d.zone_friendly_name?.toLowerCase().includes(keyword.toLowerCase()),
    );
    return item ? item.value : "-";
  };

  const findName = (keyword) => {
    const item = rackData.find((d) =>
      d.zone_friendly_name?.toLowerCase().includes(keyword.toLowerCase()),
    );
    return item ? item.zone_friendly_name : keyword;
  };

  // if (itemsLoading) {
  //   return (
  //     <div className="h-full w-full flex justify-center items-center">
  //       <Spin />
  //     </div>
  //   );
  // }

  // if (!rackData || rackData.length === 0) {
  //   return <ToBeCreated title="Rack Dashboard" />;
  // }

  return (
    <div className="h-full flex flex-col min-h-0">
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }`}</style>
      <div className="w-full flex justify-end mb-1 px-4">
        <span className="text-sm text-slate-600 font-medium">
          Last Updated:&nbsp;
          <span className="text-slate-800 font-semibold">
            {data?.last_communication_time
              ? new Date(data?.last_communication_time).toLocaleString(
                  "en-GB",
                  {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  },
                )
              : "N/A"}
          </span>
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-2 flex-1 min-h-0 ">
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
              <div className="flex-1 flex flex-col">
                <PowerSourceItem
                  label={findName("Power Source A")}
                  value={findValue("Power Source A")}
                />
              </div>
              <div className="flex-1 flex flex-col">
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
              <div className="bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center">
                <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide truncate">
                  {findName("Front Door")}
                </div>

                <div className="flex items-center justify-between mt-0.5">
                  {findValue("Front Door") === 1 ? (
                    <MdMeetingRoom className="text-2xl text-red-500" />
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
              <div className="bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center">
                <div className="text-[10px] font-semibold text-gray-600 uppercase tracking-wide truncate">
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
          <div className="h-[58%] bg-gray-50 p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
            {/* Security */}
            <div className="flex items-center gap-2 shrink-0">
              <MdSecurity className="text-rose-500 text-2xl" />
              <div className="text-lg font-semibold tracking-tight">Security</div>
            </div>
            <div className="grid grid-cols-3 gap-1 mb-2 ">
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

            {/* UPS Status */}
            <div className="flex items-center gap-2 shrink-0">
              <MdOutlineBatteryChargingFull className="text-emerald-500 text-2xl" />
              <div className="text-lg font-semibold tracking-tight">UPS Status</div>
            </div>
            <div className="grid grid-cols-3 gap-1  text-center ">
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                  UPS Load
                </div>
                <div className="text-2xl font-semibold leading-tight mt-2">
                  {findValue("UPS Output Load")}%
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                  UPS Health
                </div>
                <div className="text-2xl font-semibold text-emerald-500 leading-tight mt-2">
                  {findValue("UPS Battery Health")}%
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-gray-200 flex flex-col justify-center">
                <div className="text-sm font-semibold text-gray-600 uppercase leading-none">
                  UPS Runtime
                </div>
                <div className="text-2xl font-semibold leading-tight mt-2">
                  {findValue("Remaining Time")}m
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 3: Electrical, Env, Climate */}
        <div
          className="flex-1 flex flex-col gap-2 h-full overflow-hidden"
          style={{ flex: "1 1 0" }}
        >
          {/* Electrical Metrics */}
          <div
            className="bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm flex-1 flex flex-col min-h-0"
            style={{ flex: "1 1 0" }}
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
            className="bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-col min-h-0"
            style={{ flex: "1 1 0" }}
          >
            <div className="flex items-center justify-between mb-2 shrink-0">
              <div className="text-lg font-semibold tracking-tight flex items-center gap-2">
                <MdThermostat className="text-sky-600 text-2xl" /> Environmental
                Sensors
              </div>
              <div className="flex items-center gap-1">
                <MdThermostat className="text-amber-500 text-lg" />
                <MdWaterDrop className="text-sky-500 text-lg" />
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
            className="bg-gray-50 p-3 rounded-2xl border border-gray-200 shadow-sm flex flex-col min-h-0"
            style={{ flex: "1 1 0" }}
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
  <div className="flex items-center justify-between px-2 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm h-full">
    <div className="flex items-center gap-2 min-w-0">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          value == null
            ? "bg-gray-100 text-gray-400"
            : value === 1
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
          : value === 1
            ? "bg-emerald-500 text-white"
            : "bg-red-500 text-white"
      } px-2.5 py-0.5 rounded-full text-xs font-bold uppercase shrink-0`}
    >
      {value == null ? "-" : value === 1 ? "ON" : "OFF"}
    </div>
  </div>
);

const SecurityItem = ({ icon, label, value }) => (
  <div className="bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between items-center h-full">
    {icon && (
      <div
        className={`text-2xl mb-1 ${value === 1 ? "text-red-500" : "text-emerald-500"}`}
      >
        {icon}
      </div>
    )}
    <div className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-1 text-center">
      {label}
    </div>
    <div
      className={`px-2 py-0.5 text-sm font-semibold rounded uppercase text-center flex items-center justify-center gap-1 ${
        value == null
          ? "bg-gray-300 text-gray-600"
          : value === 1
            ? "bg-red-500 text-white animate-[blink_1s_step-end_infinite]"
            : "bg-emerald-500 text-white"
      }`}
    >
      {value == null ? (
        "-"
      ) : value === 1 ? (
        <>
          <MdWarning className="text-base" /> ALARM
        </>
      ) : (
        "NORMAL"
      )}
    </div>
  </div>
);

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
    <div className="text-base font-semibold uppercase tracking-[0.15em] border-l-4 pl-2 mb-1.5 text-sky-600 border-sky-600">
      {title}
    </div>
    <div className="flex-1 grid grid-cols-2 gap-1.5 ">
      <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center items-center">
        <MdThermostat className="text-xl text-amber-500 mb-1" />
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {tempLabel}
        </div>
        <div className="text-xl font-semibold">
          {temp}
          <span className="text-sm font-semibold text-gray-600 ml-0.5">°C</span>
        </div>
      </div>
      <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-center items-center">
        <MdWaterDrop className="text-2xl text-sky-500 mb-1" />
        <div className="text-xs font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {humidityLabel}
        </div>
        <div className="text-xl font-semibold">
          {humidity}
          <span className="text-sm font-semibold text-gray-600 ml-0.5">%</span>
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
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden h-full">
    <div
      className={`flex items-center justify-between px-3 py-1.5 border-b ${active == null ? "bg-gray-50 border-gray-200" : active === 1 ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}
    >
      <div
        className={`text-sm font-semibold uppercase tracking-[0.15em] ${active == null ? "text-gray-500" : active === 1 ? "text-emerald-600" : "text-red-600"}`}
      >
        {label}
      </div>
      <MdBolt
        className={`text-xl ${active == null ? "text-gray-400" : active === 1 ? "text-emerald-500" : "text-red-500"}`}
      />
    </div>
    <div className="flex-1 grid grid-cols-3 divide-x divide-gray-200">
      <div className="p-1.5 flex flex-col justify-center items-center">
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {vLabel}
        </div>
        <div className="text-xl font-semibold tracking-tighter">
          {v}
          <span className="text-base font-semibold text-gray-600 ml-0.5">
            V
          </span>
        </div>
      </div>
      <div className="p-1.5 flex flex-col justify-center items-center">
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {aLabel}
        </div>
        <div className="text-xl font-semibold text-sky-600 tracking-tighter">
          {a}
          <span className="text-base font-semibold text-sky-400 ml-0.5">A</span>
        </div>
      </div>
      <div className="p-1.5 flex flex-col justify-center items-center">
        <div className="text-sm font-semibold text-gray-600 uppercase mb-1 tracking-wide text-center">
          {kwhLabel}
        </div>
        <div className="text-xl font-semibold text-amber-500 tracking-tighter">
          {kwh}
          <span className="text-base font-semibold text-amber-400 ml-0.5">
            KW
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ClimateCard = ({ icon, label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-between h-full">
    <div
      className={`text-3xl ${value == null ? "text-gray-400" : value === 1 ? "text-emerald-500" : "text-red-500"}`}
    >
      {icon}
    </div>
    <div className="text-sm font-semibold text-gray-600 uppercase tracking-widest text-center">
      {label}
    </div>
    <div
      className={`px-4 py-1 text-sm font-semibold tracking-[0.1em] rounded-full uppercase text-center ${value == null ? "bg-gray-300 text-gray-600" : value === 1 ? "bg-emerald-500 text-white" : "bg-red-500 text-white"}`}
    >
      {value == null ? "-" : value === 1 ? "ON" : "OFF"}
    </div>
  </div>
);

export default RackDashboard;
