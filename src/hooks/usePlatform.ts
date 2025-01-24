import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";



interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    // initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;
