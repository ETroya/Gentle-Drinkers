import React, { useState } from "react";
import Gluejar from "react-gluejar";
import { Form, Button } from "react-bootstrap";

import API from "../../utils/api";
import "./newBeer.css";
import ImageButton from "./ImageButton";
import Images from "./Image";

const NewBeer = () => {
  const [images, setImages] = useState([]);

  const [beer, setBeer] = useState({
    name: "",
    type: "",
    abv: "",
  });

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
  };

  //Take the input from the new beer form and saves each change to state
  const handleChange = (e) => {
    setBeer({ ...beer, [e.target.name]: e.target.value });
  };

  const removeImages = (id) => {
    const removed = images.filter((image) => image.public_id !== id);
    setImages(removed);
  };

  //Either gets the upload button or if image is uploaded, gets image
  const getImageContent = () => {
    switch (true) {
      case images.length > 0:
        return <Images images={images} removeImages={removeImages} />;
      default:
        return <ImageButton />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.addBeer(beer).then((res) => {
      console.log("====================================");
      console.log(res);
      console.log("====================================");
    });
  };

  return (
    <div className="newBeer">
      <div className="newBeerForm  ">
        <div className="addBeer">
          <h2 className="text-center">Add new beer</h2>
          {getImageContent()}
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group>
              <Form.Label>Beer Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Beer Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                onChange={(e) => handleChange(e)}
                required
              >
                <option>Type of beer</option>
                <option value="Ale">Ale</option>
                <option value="Stout">Stout</option>
                <option value="IPA">IPA</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>ABV%</Form.Label>
              <Form.Control
                type="number"
                name="abv"
                onChange={(e) => handleChange(e)}
                required
              />
            </Form.Group>
            <Button type="submit">ADD BEER!</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewBeer;
