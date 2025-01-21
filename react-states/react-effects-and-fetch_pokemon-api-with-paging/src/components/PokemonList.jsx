import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState({});
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(currentPage);
        const data = await response.json();
        console.log("Data:", data);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [currentPage]);

  function handlePreviousPage() {
    if (pokemon.previous) {
      setCurrentPage(pokemon.previous);
    }
  }

  function handleNextPage() {
    if (pokemon.next) {
      setCurrentPage(pokemon.next);
    }
  }

  return (
    <main>
      <button type="button" onClick={handlePreviousPage}>
        Previous Page
      </button>
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>
      <ul>
        {pokemon?.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
