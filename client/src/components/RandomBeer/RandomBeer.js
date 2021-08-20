import React, { useEffect, useState } from "react";
import Beerlist from "../Beerlist/beerList";
import { useStateContext } from "../../utils/GlobalState";

import "./RandomBeer.css";

const RandomBeer = ({ beers }) => {
  const [state, dispatch] = useStateContext();
  const [randomBeer, setRandomBeer] = useState({});

  const [beer, setBeer] = useState({});
  useEffect(() => {
    getRandomBeer();
  }, [state]);

  function getRandomBeer() {
    let randomNumber = Math.floor(Math.random() * state.beers.length);
    let random = state.beers[randomNumber];
    setRandomBeer(random);
  }

  return (
    <div className="row beerCard">
      <h1>RANDOM BEER!</h1>
      <div className="randomBeer col-md-6">
        <p className="beerName">{randomBeer.name}</p>
        <p className="">Brewery</p>
        <p>{randomBeer.abv}% ABV</p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed?
        </p>
      </div>

      <div className="col-md-6">
        <img
          alt="beer image"
          className="randomBeerImage"
          src={randomBeer.image}
        ></img>
      </div>
    </div>
  );
};

export default RandomBeer;
