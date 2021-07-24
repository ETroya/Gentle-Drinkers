import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import axios from 'axios';
import "./list.css";
import api from "../../utils/api";
import List from "../List/index";

function Beerlist() {
  const [filteredBeers, setFilterBeer] = useState([]);

  // useEffect(() => {
  //   api.getBeer().then((allBeers) => {
  //     const totalBeers = allBeers.data.map((result) => {
  //       let beer = {
  //         beerName: result.name,
  //         brewery: result.brewery,
  //         flavorNotes: result.flavor,
  //         abv: result.percent,
  //         range: result.range,
  //       };
  //       return beer;
  //     });
  //     setFilterBeer(totalBeers);
  //   });
  // }, []);

  return (
    <div>
      <Container>
        <table id="list" container="table"></table>
        <tbody id="beers">
          {filteredBeers.map((beer, index) => (
            <List
              key={index}
              beerName={beer.name}
              brewery={beer.brewery}
              flavorNotes={beer.flavor}
              abv={beer.abv}
              range={beer.range}
              index={index}
            />
          ))}
        </tbody>
      </Container>
    </div>
  );
}

export default Beerlist;
