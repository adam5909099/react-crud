import { useQuery } from "react-query";
import client from "../utils/client";

export interface Address {
  id: number;
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

export default function useGetAddresses() {
  const url = "v1/address";

  return useQuery<Address[]>(url, () => client.get(url).then((r) => r.data));
}
