import React from "react";
import Navbar from "../components/NavBar/navbar";
import Footer from "../components/Footer/footer";
import "./style.css";
import RandomBeer from "../components/randomBeer/RandomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";

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
      <Footer />
    </div>
  );
};

export default Main;
