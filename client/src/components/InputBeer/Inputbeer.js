import React, { useState }  from "react";
import Axios from "axios";

function InputBeer() {

  const [imageSelected, setImageSelected]=useState("")
  const uploadImage = () => {

    //form data =
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "BeerPhotos");

    Axios.post(
      "https://api.cloudinary.com/v1_1/gentledrinkers/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    })
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default InputBeer;
