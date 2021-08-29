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
      <header className="row header-container">
        <Header addBeer={addBeer} setAddBeer={setAddBeer} />
        <div className="intro">
          This area will hold introductory information
        </div>
      </header>
      <div className="row">
        <div className="col-md-4">
          <Questionnaire />
          <div className="add-card">
            {" "}
            This is where the add beer card will be
          </div>
        </div>
        <div className="col-md-4 message-board">
          this is where the message board will go
        </div>
        <div className="col-md-4 ">
          <div className="beerCards">
            <div className="randomCard">
              {loading ? <div></div> : <RandomBeer beers={beers} />}
            </div>

            <div className="randomCard">
              {loading ? <div></div> : <RandomBeer beers={beers} />}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="map mt-5 mb-2">this is where the map will go</div>
      </div>
      <footer className="row footer">
        <Footer />
      </footer>
    </>
  );
};

export default Main;
