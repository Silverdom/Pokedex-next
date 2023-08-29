import { useState } from "react";
import PokeListLoader from "../components/PokeListLoader";
import PokeSearch from "../components/PokeSearch";

const Pokedex = ({ pokemons }) => {
  let [pokemonList, setPokemonList] = useState(pokemons);
  const doesNotHavePokemon = !pokemonList;

  const setFilteredPokemonList = (pokedata) => {
    console.log(pokedata);
    setPokemonList(pokedata);
  }

  if (doesNotHavePokemon) {
    return (
      <h1>Sorry, please try again</h1>
    );
  } else {
    return (
      <>
        <PokeSearch setPokeList={setFilteredPokemonList} pokeList={pokemonList}/>
        <PokeListLoader offset={0} limit={30} pokeListDefault={pokemonList}/>
      </>
    );
  }
}

export const getServerSideProps = async ({ context }) => {
  let pokemonListData = [];

  try {
    const pokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0");
    pokemonListData = await pokemonList.json();
  } catch (error) {
    console.log("my error" + error);
  }
  console.log(pokemonListData);
  return {
    props: {
      pokemons: pokemonListData.results
    }
  };
}

export default Pokedex;