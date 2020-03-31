import React from "react";

export default function ImageCard({ image }) {
  let source = `./images/image (${image}).jpg`;
  return <img src={source} alt="wilson landscape work" />;
}
