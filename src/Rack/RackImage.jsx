import React from "react";

function RackImage({ rackName, data, onClick }) {
  
  const sourceArray = Array.isArray(data)
    ? data
    : Array.isArray(data?.data)
      ? data.data
      : [];

  const rackData = sourceArray.map((d) => ({
    ...d,
    zone_friendly_name: d.device_name || null,
  }));

  const findValue = (keyword) => {
    const item = rackData.find((d) =>
      d.device_name?.toLowerCase().includes(keyword.toLowerCase()),
    );

    return item ? item.value : null;
  };

  const findName = (keyword) => {
    const item = rackData.find((d) =>
      d.device_name?.toLowerCase().includes(keyword.toLowerCase()),
    );

    return item ? item.device_name : keyword;
  };

  const upsHealth = findValue("UPS Health Status");

  const status =
    upsHealth == null
      ? "-"
      : Number(upsHealth) === 0
        ? "Shutdown"
        : Number(upsHealth) <= 219
          ? "Alarm"
          : "Healthy";

  return (
    <div className="w-full h-full min-h-0 flex flex-col   gap-2">
      <div className="flex justify-center">
        <span className="bg-[#0F678F] px-6 py-2 text-center text-white rounded-lg font-semibold text-sm tracking-wide">
          {rackName}
        </span>
      </div>
      <div className="relative flex-1 min-h-0 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <img
          src="/Rack.jpg"
          alt="Rack"
          className="w-full h-full object-fill cursor-pointer"
          onClick={onClick}
        />

        {/* Power Monitor Overlay */}
        <div
          className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
          style={{
            top: "5.5%",
            left: "15%",
            width: "42%",
            height: "13%",
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
            top: "8%",
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
          className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
          style={{
            top: "22%",
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
          className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
          style={{
            top: "65%",
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
            height: "23%",
          }}
        >
         <div className="grid grid-cols-1 gap-1 h-full">
                <div className="flex flex-col justify-center items-center  leading-none">
                  <div
                    className="text-gray-300"
                    style={{ fontSize: "clamp(12px, 0.5vw, 14px)" }}
                  >
                    UPS Load
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
                    UPS Battry (%)
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
                    UPS Health Status
                  </div>

                  <div
                    className={`px-2 py-[2px] text-[8px] font-semibold rounded-full uppercase ${
                      upsHealth == null
                        ? "bg-gray-700 text-gray-300"
                        : status === "Healthy"
                          ? "bg-emerald-500 text-white"
                          : status === "Alarm"
                            ? "bg-orange-500 text-white"
                            : "bg-red-500 text-white"
                    }`}
                  >
                    {status}
                  </div>
                </div>
              </div>
        </div>

        {/* cooling Status */}
        <div
          className="absolute bg-[#0C0E12] text-white px-1.5 py-1"
          style={{
            top: "30%",
            left: "74%",
            width: "24%",
            height: "40%",
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
  );
}

export default RackImage;
