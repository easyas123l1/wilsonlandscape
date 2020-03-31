import React from "react";

export default function ImageCard({ image }) {
  let source = `./images/image (${image}).jpg`;
  return (
    <a href={source} target="_blank" rel="noopener noreferrer">
      <img src={source} alt="wilson landscape work" />
    </a>
  );
}
