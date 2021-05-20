import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import "./style.css";
import RandomBeer from "../components/RandomBeer/RandomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
import Beerlist from "../components/Beerlist/list";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="featuredCard">
        <FeaturedBeer />
      </div>
      <div className="questions container">
        <h1>Beer Questions will go here</h1>
      </div>
      <div className="randomCard">
        <RandomBeer />
      </div>
        <Beerlist />
      <h1>Beerlist</h1>
      <Footer />
    </div>
  );
};

export default Main;
