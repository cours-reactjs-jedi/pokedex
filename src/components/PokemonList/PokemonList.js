import React, {useState, useEffect}  from "react";
import axios from "axios"
import Pokemon from '../Pokemon';

function PokemonList({ searchTerm = "" }) {


  const [pokemonList, setPokemonList] = useState([])

  async function getData() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
    setPokemonList(res.data.results)
  }

  useEffect(() => {
    getData()
    console.log(process.env.REACT_APP_API_KEY)
  }, [])

  return (
    <ul>
      {pokemonList.filter((pokemon) => pokemon.name.includes(searchTerm)).map((pokemon) => (
        <Pokemon pokemon={pokemon} key={pokemon.name}/>
      ))}
    </ul>
  );
}

export default PokemonList;
