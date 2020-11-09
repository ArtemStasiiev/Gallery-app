import React from "react";
import "../styles/Navbar.scss";
import LogoIcon from "../images/camera.svg";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Logo-Con">
        <img src={LogoIcon} alt="" />
        <div>
          <h3>POLAROID</h3>
          <p>Photos for everyone</p>
        </div>
      </div>
    </nav>
  );
}
