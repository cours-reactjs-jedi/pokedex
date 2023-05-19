import React from 'react'
import { useState, useEffect } from 'react';
import  axios from 'axios';
import {  useLoaderData } from 'react-router-dom'

export async function loaderPokemon({params}) {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokeid}`)
    return {pokemon: res.data}
} 

function PokemonPage() {
  const { pokemon } = useLoaderData();

  return (
    <>
      {pokemon ? (
        <div>
          <img src={pokemon?.sprites?.other?.dream_world.front_default} />
          <h2>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h2>
          <h4>{pokemon.types.map((type) => type.type.name).join(", ")}</h4>
        </div>
      ) : (
        <h3>LOADING</h3>
      )}
    </>
  );
}

export default PokemonPage