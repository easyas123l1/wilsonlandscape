import React from "react";
import landscape from "../../styles/landscape.module.scss";

export default function ImageCard({ image }) {
  let source = `./images/image (${image}).jpg`;
  return <img src={source} alt="wilson landscape work" />;
}
