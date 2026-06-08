import { useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import useRackDetails from "../hooks/useRackDetails";
import RackImage from "./RackImage";
import RackDashboard from "./RackDashboard";

function RackImageDashboard() {
  const { selectedRacks } = useOutletContext();

  const [selectedRackData, setSelectedRackData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: rackData = [],
    isLoading,
    isError,
  } = useRackDetails(selectedRacks);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load rack details</div>;

  return (
    <>
      {!selectedRackData ? (
        <div className="h-[calc(100vh-140px)] grid grid-cols-3 gap-4 overflow-hidden">
          {rackData.map((rack) => (
            <RackImage
              key={rack.rackName}
              rackName={rack.rackName}
              data={rack.data}
              onClick={() => {
                setSelectedRackData({
                  rackName: rack.rackName,
                  data: rack.data,
                });

                setSearchParams({
                  rack: rack.rackName.replace(/\s+/g, "_"),
                });
              }}
            />
          ))}
        </div>
      ) : (
        <RackDashboard
          rackName={selectedRackData.rackName}
          data={selectedRackData.data}
          onBack={() => {
            setSelectedRackData(null);

            const newParams = new URLSearchParams(searchParams);
            newParams.delete("rack");
            setSearchParams(newParams);
          }}
        />
      )}
    </>
  );
}

export default RackImageDashboard;
