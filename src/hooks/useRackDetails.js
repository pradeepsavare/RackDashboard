import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useRackDetails(rackNames = []) {
  return useQuery({
    queryKey: ["rackDetails", rackNames],

    queryFn: async () => {
      const today = new Date();

      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");

      const responses = await Promise.all(
        rackNames.map(async (rackName) => {
          const { data } = await axios.get("/get_rack_device_details", {
            params: {
              rack_name: rackName,
              start_time: `${yyyy}-${mm}-${dd} 00:00:00`,
              end_time: `${yyyy}-${mm}-${dd} 23:59:59`,
            },
          });

          return {
            rackName,
            data,
          };
        })
      );

      return responses;
    },

    enabled: rackNames.length > 0,
  });
}