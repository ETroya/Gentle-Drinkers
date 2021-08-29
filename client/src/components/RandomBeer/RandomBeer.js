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
    <div
      className="row beerCard"
      style={{ backgroundImage: `url(${randomBeer.image})` }}
    >
      <div className="randomBeer">
        <p className="beerName">{randomBeer.name}</p>
        <p className="">Brewery</p>
        <p>{randomBeer.abv}% ABV</p>
      </div>
    </div>
  );
};

export default RandomBeer;
