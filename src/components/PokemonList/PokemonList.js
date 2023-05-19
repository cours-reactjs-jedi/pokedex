import React, { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "../Pokemon";
import Pagination from "../Pagination";

function PokemonList({ searchTerm = "" }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [paginatedList, setPaginatedList] = useState([]);

  async function getData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
    setPokemonList(res.data.results);
  }

  useEffect(() => {
    getData();
    console.log(process.env.REACT_APP_API_KEY);
  }, []);

  return (
    <>
      <Pagination
        list={pokemonList.filter((pokemon) =>
          pokemon.name.includes(searchTerm)
        )}
        setList={setPaginatedList}
        // resultsPerPage={2}
      />
      <ul>
        {paginatedList.map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
    </>
  );
}

export default PokemonList;
