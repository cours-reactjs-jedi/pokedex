import React from 'react'
import { useState, useEffect } from 'react';
import  axios from 'axios';

function Pokemon({pokemon}) {
  const [picture, setPicture] = useState("")

  async function getData() {
    const res = await axios.get(pokemon.url)
    setPicture(res.data.sprites.other.dream_world.front_default)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <li>{pokemon.name}</li>
      <img src={picture} />
    </>
  );
}

export default Pokemon