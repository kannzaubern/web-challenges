import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <p>Failed to load characters</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No characters found</p>;

  return (
    <>
      <h1>Character Information</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
