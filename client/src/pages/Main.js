import React from "react";
import Navbar from "../components/NavBar/navbar";
import "./style.css";
import RandomBeer from "../components/RandomBeer/RandomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="randomCard">
        <RandomBeer />
      </div>

      <div className="featuredCard">
        <FeaturedBeer />
      </div>
    </div>
  );
};

export default Main;
