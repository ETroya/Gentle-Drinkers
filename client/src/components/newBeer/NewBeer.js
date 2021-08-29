import React, { useState, useRef } from "react";
import Gluejar from "react-gluejar";
import { Form, Alert } from "react-bootstrap";
import Axios from "axios";

import API from "../../utils/api";
import "./newBeer.css";
import ImageButton from "./ImageButton";
import Images from "./Image";

const NewBeer = ({ setAddBeer }) => {
  const [error, setError] = useState("");
  const [images, setImages] = useState(false);
  const [imageSelected, setImageSelected] = useState("");
  const [attribute, setAttribute] = useState("");
  const [beer, setBeer] = useState({
    name: "",
    type: "",
    abv: "",
    image: "",
  });

  const beerNameRef = useRef();

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
    setImages(false);
    setImageSelected("");
  };

  //Either gets the upload button or if image is uploaded, gets image
  const getImageContent = () => {
    if (images) {
      beerNameRef.current.focus();

      return (
        <Images
          images={imageSelected}
          attribute={attribute}
          removeImages={removeImages}
          setAttribute={setAttribute}
        />
      );
    } else {
      return (
        <ImageButton
          setImages={setImages}
          setImageSelected={setImageSelected}
        />
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (beer.name === "") {
      return setError("Please Enter the name of the beer");
    } else if (beer.type === "") {
      return setError("Please Enter the type of the beer");
    } else if (beer.abv === "") {
      return setError("Please Enter alcohol percentage");
    } else if (imageSelected === "") {
      return setError("Please add photo");
    } else {
      setError("");
    }
    let imageURL;

    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "BeerPhotos");

    Axios.post(
      "https://api.cloudinary.com/v1_1/gentledrinkers/image/upload",
      formData
    ).then((response) => {
      setBeer({ ...beer, image: response.data.url });
      API.addBeer(beer).then((res) => {
        setAddBeer(false);
      });
    });
  };

  return (
    <div className="newBeer">
      <p className="close-newBeer" onClick={() => setAddBeer(false)}>
        X
      </p>
      <div className="newBeer-content">
        <h2 className="text-center">Add new beer</h2>
        {getImageContent()}
        {error && (
          <Alert className="mt-4" variant="danger">
            {error}
          </Alert>
        )}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label className="label">Beer Name</Form.Label>
            <Form.Control
              ref={beerNameRef}
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">Beer Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option value="Ale">Ale</option>
              <option value="Stout">Stout</option>
              <option value="IPA">IPA</option>
              <option value="Import Pale Lager">Import Pale Lager</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label className="label">ABV%</Form.Label>
            <Form.Control
              type="number"
              name="abv"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <button className="beer-button" type="submit">
            ADD BEER!
          </button>
        </Form>
      </div>
    </div>
  );
};

export default NewBeer;
