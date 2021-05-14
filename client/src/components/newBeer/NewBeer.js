import React, { useState } from "react";
import Gluejar from "react-gluejar";
import "./NewBeer.css";
import ImageButton from "./ImageButton";
import Images from './Image';

const NewBeer = () => {
    const [images, setImages] = useState([]);

    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        console.log(file);
      }
    };

    const removeImages = id => {
        const removed = images.filter(image => image.public_id !== id);
        setImages(removed);
    };

  const getContent = () => {
    switch (true) {
      case images.length > 0:
        return (<><h1>you made it</h1><Images images={images} removeImages={removeImages} /></>);
      default:
        return <ImageButton />;
    }
  };

  return <div>
      {getContent()}
  </div>;
};

export default NewBeer;
