import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink exact to="/" activeStyle={{ color: "yellow" }}>
            About
          </NavLink>
        </div>
        <div className={landscape.navDiv}>
          <NavLink to="/services" activeStyle={{ color: "yellow" }}>
            Services
          </NavLink>
        </div>
        <div className={landscape.navDiv}>
          <NavLink to="/portfolio" activeStyle={{ color: "yellow" }}>
            Portfolio
          </NavLink>
        </div>
        <div className={landscape.navDiv}>
          <NavLink to="/contact" activeStyle={{ color: "yellow" }}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
