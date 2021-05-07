import React from "react";
import Navbar from "../components/NavBar/navbar";
import "./style.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="row firstRow">
        <div className="col-md-8">
          {" "}
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed?
          </p>
        </div>
        <div className="col-md-4">
          <img
            src={
              "https://media.istockphoto.com/photos/glass-of-fresh-and-cold-beer-on-dark-background-picture-id1058117688?k=6&m=1058117688&s=612x612&w=0&h=1BkCusD8UIR2UvaD0NhU0RPHXmYdEdqiQF2MFysBDPk="
            }
          ></img>
        </div>
      </div>
      <div className="row secondRow">
      <div className="col-md-4">
          <img
            src={
              "https://media.istockphoto.com/photos/glass-of-fresh-and-cold-beer-on-dark-background-picture-id1058117688?k=6&m=1058117688&s=612x612&w=0&h=1BkCusD8UIR2UvaD0NhU0RPHXmYdEdqiQF2MFysBDPk="
            }
          ></img>
        </div>
        <div className="col-md-8">
          {" "}
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed?
          </p>
        </div>

      </div>
    </div>
  );
};

export default Main;
