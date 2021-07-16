import React from "react";

const ImageButton = () => {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="imageInput container">
      <input
        className="fileInput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
      />
      <div className="imageDiv" onClick={() => imageUploader.current.click()}>
        Click here to upload image
        <img className="image" ref={uploadedImage} />
      </div>
    </div>
  );
};

export default ImageButton;
