import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/footer";
import "./style.css";
import RandomBeer from "../components/RandomBeer/randomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
import Header from "../components/NavBar/navbar";
import Beerlist from "../components/Beerlist/beerList";
import Inputbeer from "../components/InputBeer/Inputbeer";
import Questionnaire from "../components/questionnaire/Questionnaire";
import NewBeer from "../components/NewBeer/NewBeer";
import API from "../utils/api";
import { useStateContext } from "../utils/GlobalState";

const Main = () => {
  const [addBeer, setAddBeer] = useState(false);
  const [state, dispatch] = useStateContext();
  const [randomBeer, setRandomBeer] = useState({});
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getBeers()
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "setBeers", payload: res.data });
        setBeers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("[WARNING] " + error);
      });
  }, []);

  return (
    <>
      {addBeer ? <NewBeer setAddBeer={setAddBeer} /> : null}
      <div>
        <Header addBeer={addBeer} setAddBeer={setAddBeer} />
        <div className="randomCard">
          {loading ? <div>Is loading...</div> : <RandomBeer beers={beers} />}
        </div>
        <div>
          <Questionnaire />
        </div>
        <div className="featuredCard">
          <Inputbeer />
        </div>
        <div className="featuredCard">
          <FeaturedBeer />
        </div>
        <div className="beerList">
          <Beerlist />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
