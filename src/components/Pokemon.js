import React from 'react'
import { useState, useEffect } from 'react';
import  axios from 'axios';
import { Link } from 'react-router-dom';

function Pokemon({pokemon, index}) {
  const [picture, setPicture] = useState("")

  async function getData() {
    const res = await axios.get(pokemon.url)
    setPicture(res.data.sprites.other.dream_world.front_default)
  }

  useEffect(() => {
    getData()
  }, [])

  // const regex = /^(.*)\/pokemon\/(?<pokemonId>\d+)(\/?)$/g
  // const match = regex.exec(pokemon.url)

  // if (!match) return null

  // const index = match.groups?.pokemonId

  return (
    <>
    <li>
    <Link to={`/pokemon-list/${index + 1}`}>{pokemon.name}</Link>
    </li>
      <img src={picture} />
    </>
  );
}

export default Pokemon