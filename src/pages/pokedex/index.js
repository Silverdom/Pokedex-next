import { useState } from "react";
import PokeListLoader from "../components/PokeListLoader";
import PokeSearch from "../components/PokeSearch";
import Head from "next/head";

const Pokedex = ({ pokemons }) => {
  let [pokemonList, setPokemonList] = useState(pokemons);
  const doesNotHavePokemon = !pokemonList;
  let element = {};

  const setFilteredPokemonList = (pokedata) => {
    console.log(pokedata);
    setPokemonList(pokedata);
  }

  const wrapperDiv = (wrapperElement) => {
    return (
      <>
        <Head>
          <title>Pokeinfo (stash) | Pokedexs</title>
          <meta name="description" content="List of pokemons for all generations with type and species sorted in ascending order of id" />
        </Head>
        {
          wrapperElement
        }
      </>
    )
  }

  if (doesNotHavePokemon) {
    element = (
      <h1>Sorry, please try again</h1>
    );
  } else {
    element = (
      <>
        <PokeSearch setPokeList={ setFilteredPokemonList } pokeList={ pokemonList } />
        <div className="add-scroll">
          <PokeListLoader offset={ 0 } limit={ 12 } pokeListDefault={ pokemonList } />
        </div>
      </>
    );
  }

  return wrapperDiv(element);
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