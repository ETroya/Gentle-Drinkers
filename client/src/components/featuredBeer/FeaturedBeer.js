import React, { useEffect, useState } from "react";
import Beerlist from "../Beerlist/beerList";
import { useStateContext } from "../../utils/GlobalState";

import "./FeaturedBeer.css";

const FeaturedBeer = ({ beers }) => {
  const [state, dispatch] = useStateContext();
  const [featuredBeer, setFeaturedBeer] = useState({});

  const [beer, setBeer] = useState({});
  useEffect(() => {
    getFeaturedBeer();
  }, [state]);

  function getFeaturedBeer() {
    let randomNumber = Math.floor(Math.random() * state.beers.length);
    let random = state.beers[randomNumber];
    setFeaturedBeer(random);
  }
  return (
    <div className="row beerCard">
      <h1>FEATURED BEER!</h1>
      <div className="col-md-6 ">
        <img
          alt="Feadtured"
          className="randomBeerImage"
          src={featuredBeer.image}
        ></img>
      </div>
      <div className="randomBeer col-md-6">
        <p className="beerName">{featuredBeer.name}</p>
        <p>Brewery</p>
        <p>{featuredBeer.abv}% ABV</p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed?
        </p>
      </div>
    </div>
  );
};

export default FeaturedBeer;
