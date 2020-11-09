import React from "react";
import "../../styles/Presentation.scss";
import VideoMp4 from "../../videos/video.mp4";
import VideoWebm from "../../videos/video.webm";
import ArrowImage from "../../images/arrowDown.svg";

export default function Presentation() {
  return (
    <div className="Presentation">
      <video autoPlay muted loop>
        <source src={VideoMp4} type="video/mp4" />
        <source src={VideoWebm} type="video/webm" />
      </video>
      <div className="Shadow">
        <div className="Shadow-Content__Con">
          <h1>WELCOME TO POLAROID</h1>
          <p>Homepage with full-width image gallery</p>
          <div className="Arrow-Btn">
            <img src={ArrowImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
