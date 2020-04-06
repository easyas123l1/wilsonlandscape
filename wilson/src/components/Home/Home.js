import React from "react";
import landscape from "../../styles/landscape.module.scss";

export default function Home() {
  return (
    <div className={landscape.background}>
      <div className={landscape.contextDiv}>
        <div className={landscape.homeDivide}>
          <div className={landscape.sideOne}>
            <img
              className={landscape.image}
              src="https://andersonlandscapemain.com/wp-content/uploads/2018/03/L1.png"
              alt="Wilson Landscape Thumbtack Top Pro 2017"
            />
            <p>
              Adipisicing nulla proident quis excepteur adipisicing ex nostrud
              id reprehenderit magna eu cupidatat. Do excepteur enim officia
              excepteur deserunt ut quis aliqua ad non commodo laborum qui sit.
            </p>

            <img
              className={landscape.image}
              src="./images/image (12).jpg"
              alt="Wilson Landscape Vehicles on jobsite"
            />
          </div>
          <div className={landscape.sideOne}>
            <p>
              Aliqua excepteur cupidatat labore non incididunt adipisicing est
              consectetur excepteur. Est ut est quis elit qui non. Nisi minim
              nulla occaecat aute laborum labore excepteur tempor in nulla
              aliqua eu. 12, 140, 96
            </p>
            <img
              className={landscape.image}
              src="https://andersonlandscapemain.com/wp-content/uploads/2012/03/thumbtack-1.png"
              alt="Wilson Landscape Thumbtack Best Of 2016"
            />
            <p>Ad sunt ipsum minim est laborum ipsum minim consectetur elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
