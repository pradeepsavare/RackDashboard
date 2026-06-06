import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function useRackDetails(rackName) {
  return useQuery({
    queryKey: ["rackDetails", rackName],
    queryFn: async () => {
      const today = new Date();

      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");

      const { data } = await axios.get(
        "/get_rack_device_details",
        {
          params: {
            rack_name: rackName,
            start_time: `${yyyy}-${mm}-${dd} 00:00:00`,
            end_time: `${yyyy}-${mm}-${dd} 23:59:59`,
          },
        }
      );

      return data;
    },
    enabled: !!rackName,
  });
}