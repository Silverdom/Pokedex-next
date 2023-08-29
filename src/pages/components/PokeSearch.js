import { useState } from "react";

const PokeSearch = ({setPokeList, pokeList}) => {

  const searchPokemon = () => {
    const searchString = document.getElementById("poke-search").value;
    console.log(pokeList);
    const filteredList = pokeList.filter((pokemon) => pokemon.name.indexOf(searchString) != -1)
    console.log(filteredList);
    console.log(pokeList);
    setPokeList(filteredList);
  }

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-10">
          <input id="poke-search" className="form-control" />
        </div>
        <div className="col-md-2">
          <button onClick={searchPokemon} className="btn btn-secondary">Search</button>
        </div>
      </div>
    </div>
  )
}

export default PokeSearch;