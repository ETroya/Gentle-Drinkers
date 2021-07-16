import React, { useState } from "react";
import Gluejar from "react-gluejar";
import "./NewBeer.css";
import ImageButton from "./ImageButton";
import Images from "./Image";
import { Form, Button } from "react-bootstrap";

const NewBeer = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
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

  return (
    <div className="newBeer">
      <div className="newBeerForm  ">
        <div className="addBeer">
          <h2 className="text-center">Add new beer</h2>
          {getImageContent()}
          <Form>
            <Form.Group>
              <Form.Label>Beer Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Beer Type</Form.Label>
              <Form.Control as="select">
                <option>Ale</option>
                <option>Stout</option>
                <option>IPA</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>ABV%</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Button>ADD BEER!</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default NewBeer;
