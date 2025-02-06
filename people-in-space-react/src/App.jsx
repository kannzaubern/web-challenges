import { SWRConfig } from "swr";
import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Astronauts />
    </SWRConfig>
  );
}

function Astronauts() {
  const [numberInSpace, setNumberInSpace] = useState(0);
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  const {
    data: astronauts,
    error,
    isLoading,
  } = useSWR("http://api.open-notify.org/astros.json");

  useEffect(() => {
    if (astronauts) {
      setPeopleInSpace(astronauts.people);
      setNumberInSpace(astronauts.number);
    }
  }, [astronauts]);

  if (error) return <p>Failed to load astronauts</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>People in Space</h1>
      <p>Current amount of people in space: {numberInSpace}</p>
      <ul>
        {peopleInSpace?.map((person) => (
          <li key={person.name}>
            Name: {person.name} - Craft: {person.craft}
          </li>
        ))}
      </ul>
    </div>
  );
}
