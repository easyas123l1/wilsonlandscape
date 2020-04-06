import React from "react";
import landscape from "../../styles/landscape.module.scss";

export default function Services() {
  return (
    <div className={landscape.background}>
      <div className={landscape.contextDiv}>
        <div className={landscape.homeDivide}>
          <div className={landscape.sideOne}>
            <p>
              Adipisicing nulla proident quis excepteur adipisicing ex nostrud
              id reprehenderit magna eu cupidatat. Do excepteur enim officia
              excepteur deserunt ut quis aliqua ad non commodo laborum qui sit.
            </p>

            <img
              className={landscape.image}
              src="./images/image (140).jpg"
              alt="Wilson Landscape Vehicles on jobsite"
            />
            <p>
              Ad nulla excepteur consequat quis cupidatat cillum consequat
              reprehenderit duis consequat Lorem. Nostrud deserunt in nostrud
              laborum.
            </p>
          </div>
          <div className={landscape.sideOne}>
            <p>
              Aliqua excepteur cupidatat labore non incididunt adipisicing est
              consectetur excepteur. Est ut est quis elit qui non. Nisi minim
              nulla occaecat aute laborum labore excepteur tempor in nulla
              aliqua eu. 12, 140, 96 30
            </p>
            <img
              className={landscape.image}
              src="./images/image (96).jpg"
              alt="Wilson Landscape Vehicles on jobsite"
            />
            <p>
              Ad sunt ipsum minim est laborum ipsum minim consectetur elit.
              Voluptate tempor nulla nisi est velit labore est culpa laboris. Eu
              anim enim ullamco amet culpa deserunt nostrud consectetur labore
              officia tempor commodo commodo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
