import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";

describe("PokemonList sur 10 points", () => {

  test("Affiche la liste des pokemons - 5 points", async () => {
    render(<PokemonList searchTerm="" />);
    const pokemonListItems = await screen.findAllByRole("listitem");
    expect(pokemonListItems).toHaveLength(100); // or whatever number of Pokemon you expect to be displayed
  });

  test("Filtrer la liste des pokemons - 3 points", async () => {
    render(<PokemonList searchTerm="bulb" />);
    const pokemonListItems = await screen.findAllByRole("listitem");

    expect(pokemonListItems).toHaveLength(1);
    expect(pokemonListItems[0]).toHaveTextContent("bulbasaur");
  });

  test("On peut faire plusieurs recherches sans raffraichir - 2 points", async () => {
    const {rerender} = render(<PokemonList searchTerm="bulb" />);
    const pokemonListItems = await screen.findAllByRole("listitem");

    expect(pokemonListItems).toHaveLength(1);
    rerender(<PokemonList searchTerm="ivysaur" />);
    const pokemonListItems2 = await screen.findAllByRole("listitem");

    expect(pokemonListItems2).toHaveLength(1);
    expect(pokemonListItems2[0]).toHaveTextContent("ivysaur");
  });
});
