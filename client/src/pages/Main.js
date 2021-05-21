import React from "react";
import Footer from "../components/Footer/footer"
import "./style.css";
import RandomBeer from "../components/RandomBeer/RandomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
import Header from "../components/NavBar/navbar";
import Beerlist from "../components/Beerlist/list";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="randomCard">
        <RandomBeer />
      </div>

      <div className="featuredCard">
        <FeaturedBeer />
      </div>

      <div className="beerList">
        <Beerlist />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
