import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchRackList = async () => {
  const { data } = await axios.get(
    "http://10.129.2.23:14001/get_rack_list"
  );

  return data;
};

export default function useRackList() {
  return useQuery({
    queryKey: ["rackList"],
    queryFn: fetchRackList,
  });
}