import React, { useRef } from "react";
import { GoTrashcan } from "react-icons/go";

import "./newBeer.css";
const Image = ({ images, removeImages }) => {
  return (
    <div className="image-container">
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
