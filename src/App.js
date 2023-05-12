import React, {useState} from "react";
import PokemonList from "./components/PokemonList";

const App = () => {

  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input onChange={handleChange} />

      <PokemonList searchTerm={search} />
    </div>
  );
};

export default App;
