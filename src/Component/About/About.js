import React from "react";
import "./About.css";
import FirstImage from "./firstImage.jpg";
import SecondImage from "./secondImage.jpg";
import ThirdImage from "./thirdImage.jpg";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-heading-container">
        <div className="aboutbar"></div>
        <div className="about-heading1">About.</div>
      </div>
      <div className="about-heading2">WE ARE MORE THAN DIGITAL AGENCY</div>
      <div className="about-holder">
        <div className="about-image">
          <div class="card text-white" style={{ backgroundColor: "#00000C" }}>
            <img
              class="card-img"
              src={FirstImage}
              alt="Card image"
              style={{ width: "100%", height: "490px" }}
            />
            <div
              class="card-img-overlay"
              style={{ paddingTop: "100%", color: "white" }}
            >
              <h5 class="card-title">Team Work</h5>

              <p class="card-subtitlee mb-2 ">Committed and creative</p>
            </div>
          </div>
          <div>
            <div class="card text-white" style={{ backgroundColor: "#00000C" }}>
              <img
                class="card-img"
                src={SecondImage}
                alt="Card image"
                style={{ width: "100%", height: "240px" }}
              />
              <div
                class="card-img-overlay"
                style={{ paddingTop: "36%", color: "white" }}
              >
                <h5 class="card-title">Philosophy</h5>

                <p class="card-subtitlee mb-2 ">Truth Pays off</p>
              </div>
            </div>
            <div
              class="card  text-white"
              style={{ backgroundColor: "#00000C" }}
            >
              <img
                class="card-img"
                src={ThirdImage}
                alt="Card image"
                style={{ width: "100%", height: "240px" }}
              />
              <div
                class="card-img-overlay"
                style={{ paddingTop: "36%", color: "white" }}
              >
                <h5 class="card-title">Office</h5>

                <p class="card-subtitlee mb-2">Somewhere on earth</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="about-text-nobar">
            <h5 className="about-heading">Who we are</h5>
            <p className="about-text-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="about-text-leftbar">
            <h5 className="about-heading">Our Philosophy</h5>
            <p className="about-text-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="about-text-leftbar">
            <h5 className="about-heading">How we work</h5>
            <p className="about-text-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
      <div className="aboutbarr"></div>
    </div>
  );
};

export default About;
