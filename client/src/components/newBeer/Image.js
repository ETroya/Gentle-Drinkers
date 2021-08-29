import React, { useEffect, useRef } from "react";
import { GoTrashcan } from "react-icons/go";


import "./NewBeer.css";
const Image = ({ images, removeImages, attribute, setAttribute }) => {

  return (
    <div className={attribute}>
      <div className="uploadedImageDiv">
        <p onClick={() => removeImages(images.lastModified)} className="delete">
          <GoTrashcan />
        </p>
        <div className="image-div">
          <img
            src={images}
            alt=""
            id="uploadedImage"
            onClick={removeImages}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Image;
