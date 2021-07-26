import React, { useState } from "react";
import Footer from "../components/Footer/footer";
import "./style.css";
import RandomBeer from "../components/RandomBeer/randomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
import Header from "../components/NavBar/navbar";
import Beerlist from "../components/Beerlist/beerList";
import Inputbeer from "../components/InputBeer/Inputbeer";
import Questionnaire from "../components/questionnaire/Questionnaire";
import NewBeer from "../components/NewBeer/NewBeer";

const Main = () => {
  const [addBeer, setAddBeer] = useState(false);
  return (
    <>
      {addBeer ? <NewBeer setAddBeer={setAddBeer} /> : null}
      <div>
        <Header addBeer={addBeer} setAddBeer={setAddBeer} />
        <div className="randomCard">
          <RandomBeer />
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
