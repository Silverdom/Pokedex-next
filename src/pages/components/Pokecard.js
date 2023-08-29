import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const Pokecard = ({ pokemon = { url: "", name: "" } }) => {
  let [cardImage, setCardImage] = useState("");
  let [cardDesc, setCardDesc] = useState([]);
  let dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;

    const fetchPokemon = async () => {
      let pokeDet = [];
      try {

        const fetchType = await fetch(pokemon.url);
        pokeDet = await fetchType.json();
      } catch (error) {
        console.log(error);
      }
      let typeArray = [];

      for (let type of pokeDet.types) {
        typeArray.push(type.type.name);
      }

      setCardImage(pokeDet.sprites.other['official-artwork'].front_default);
      setCardDesc(typeArray);
    }

    dataFetchedRef.current = true;
    fetchPokemon(pokemon);
  }, [])

  return (
    <>
      {
        cardImage &&
        <div className="col-sm-12 col-md-4 col-lg-3">
          <div className="card" id={ pokemon.name }>
            <div className='card-img-top'>
              <Image src={ cardImage } alt="Card image cap" width={ 502 } height={ 502 } />
            </div>
            <div className="card-body">
              <h5 className="card-title">{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</h5>
              <div className="card-text">
                {
                  cardDesc.map((e, i) => {
                    return (
                      <div className='basis-1/3 mr-2' key={ i }><p className={ `bg-card text-center type-${e} text-xs pl-4 pr-4` }>{ e }</p></div>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Pokecard;