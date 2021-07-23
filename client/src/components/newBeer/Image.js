import React from "react";
import "./newBeer.css";
const Image = ({ images, removeImages }) => {
  console.log(images);
  return (
    <div>
      {/* {images.map((image, i) => {
                console.log(image.name);
                <div key={i} className='fadein'>
                    <div onClick={() => removeImages(image.lastModified)}
                    className='delete'>
                        X
                    </div>
                    <img src={image.name} alt=''/>
                    </div>
            })} */}
      <img src={images[0].name} alt="" id="uploadedImage" />
    </div>
  );
};

export default Image;
