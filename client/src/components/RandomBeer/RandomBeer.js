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
  console.log(randomBeer);
  return (
    <div className="row randomImage">
      <div className="col-md-8">
        <div className="randomBeer">
          <p className="beerName">{randomBeer.name}</p>
          <p className="">Brewery</p>
          <p>% ABV</p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed?
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <img alt="beer "></img>
      </div>
    </div>
  );
};

export default RandomBeer;
