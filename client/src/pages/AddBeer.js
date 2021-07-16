import React from "react";
import NewBeer from "../components/newBeer/NewBeer";

const AddBeer = () => {
  return (
    <div className="row">
      <div className="col-sm-5">
        <NewBeer />
      </div>
      <div className="col-sm-7"></div>
    </div>
  );
};

export default AddBeer;
