import React, { useState, useEffect } from "react";
import landscape from "../../styles/landscape.module.scss";
import ImageCard from "./ImageCard";

export default function Portfolio() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length === 0) {
      let newArray = [];
      for (let i = 1; i < 186; i++) {
        newArray.push(i);
      }
      setImages(newArray);
    }
  }, [images.length]);

  return (
    <div className={landscape.background}>
      <div className={landscape.contextDiv}>
        <h1 className={landscape.header}>Wilson Landscape Portfolio</h1>
        <div className={landscape.portfolio}>
          {images &&
            images.map(image => {
              return <ImageCard key={image} image={image} />;
            })}
        </div>
      </div>
    </div>
  );
}
