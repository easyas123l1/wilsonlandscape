import React from "react";
import { Link } from "react-router-dom";
import landscape from "../../styles/landscape.module.scss";

export default function NavBar() {
  return (
    <div className={landscape.navBar}>
      <img
        className={landscape.headImage}
        src="newheader.jpg"
        alt="Wilson Landscape 314-853-9585 or 636-332-4343"
      />
      <div className={landscape.navBarLinks}>
        <div className={landscape.navDiv}>
          <Link to="/">About</Link>
        </div>
        <div className={landscape.navDiv}>
          <Link to="/services">Services</Link>
        </div>
        <div className={landscape.navDiv}>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className={landscape.navDiv}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
