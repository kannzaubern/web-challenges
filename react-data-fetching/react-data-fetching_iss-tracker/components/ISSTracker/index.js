import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ISSTracker() {
  const {
    data: coords,
    error,
    isLoading,
    mutate,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000, // Refresh every 5 seconds
  });

  if (error) return <div>Error loading data</div>;
  if (isLoading || !coords) return <div>Loading...</div>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()} // Re-fetch data when clicking refresh
      />
    </main>
  );
}
