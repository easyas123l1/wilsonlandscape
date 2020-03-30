import React from "react";
import landscape from "../../styles/landscape.module.scss";

export default function Home() {
  return (
    <div className={landscape.background}>
      <p>LOL</p>
      <img
        src="https://andersonlandscapemain.com/wp-content/uploads/2018/03/L1.png"
        alt="Wilson Landscape Thumbtack Top Pro 2017"
      />
      <img
        src="https://andersonlandscapemain.com/wp-content/uploads/2012/03/thumbtack-1.png"
        alt="Wilson Landscape Thumbtack Best Of 2016"
      />
    </div>
  );
}
