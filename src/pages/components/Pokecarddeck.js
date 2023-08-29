import { useState } from "react";
import Pokecard from "../components/Pokecard";

const Pokecarddeck = ({ deck = [] }) => {

  return (
    <>
      <div className="row">
        {
          deck.map((pokemon, index) => {
            return (
              <Pokecard pokemon={ pokemon } key={ index }/>
            );
          })
        }
      </div>
    </>
  );

}

export default Pokecarddeck;