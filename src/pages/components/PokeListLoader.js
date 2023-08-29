import { useEffect, useRef, useState } from "react";
import Pokecarddeck from "./Pokecarddeck";

const PokeListLoader = ({ offset, limit, pokeListDefault = [] }) => {
  let [load, setLoad] = useState(false);
  let defaultPokeList = [];
  let defaultFetch = false;
  if (pokeListDefault.length > 0) {
    defaultPokeList = pokeListDefault;
    defaultFetch = true;
  }
  let [pokeList, setPokeList] = useState(defaultPokeList);
  let dataFetchedRef = useRef(defaultFetch);
  let [fetchVal, setFetch] = useState(defaultFetch);

  const loadMorePokemons = () => {
    setLoad(true);
  }

  useEffect(() => {
    console.log("rerender pokelistloader");
    if (dataFetchedRef.current) return;

    const fetchPokemon = async () => {
      let pokemonListData = [];
      const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      pokemonListData = await pokemonList.json();

      console.log(pokemonListData);

      setPokeList(pokemonListData.results)
      setFetch(true);
    }

    dataFetchedRef.current = true;
    console.log("Fetching pokemons");
    fetchPokemon();
  }, []);

  return (
    <>
      {
        fetchVal ?
          <>
            <Pokecarddeck deck={ pokeList } />
            {
              load ?
                <>
                  <PokeListLoader offset={ offset + limit } limit={ limit } />
                </>
                :
                <button onClick={ loadMorePokemons } className="btn btn-success">Load More</button>
            }
          </>
          :
          <h1>Loading...</h1>
      }
    </>
  );
}

export default PokeListLoader;