import React from "react";
import Footer from "../components/Footer/footer";
import "./style.css";
import RandomBeer from "../components/randomBeer/RandomBeer";
import FeaturedBeer from "../components/featuredBeer/FeaturedBeer";
import Header from "../components/NavBar/navbar";

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
      <Footer />
    </div>
  );
};

export default Main;
