import { Button } from "@mui/material";
import React from "react";
import "./Works.css";
import Watch1 from "./watch1.jpg";
import Watch2 from "./watch2.jpg";
import Watch3 from "./watch3.jpg";
import Headphone from "./headphone.jpg";
import SwanImg from "./swanimg.jpg";
import Laptop from "./laptop.jpg";
const data = [
  {
    image: Watch1,
  },
  {
    image: Watch2,
  },
  {
    image: Headphone,
  },
  {
    image: Laptop,
  },
  {
    image: Watch3,
  },
  {
    image: SwanImg,
  },
];
const Works = () => {
  return (
    <div className="work">
      <div className="works-flex">
        <div>
          <div className="work-heading-container">
            <div className="workbar"></div>
            <div className="work-heading1">Works.</div>
          </div>
          <div className="work-heading2">THINGS WE'VE MADE</div>
        </div>
        <div>
          <button className="work-button">VIEW ALL</button>
        </div>
      </div>
      <div className="works-image">
        {data.map((item, index) => (
          <img src={item.image} />
        ))}{" "}
      </div>
      <div className="workbarr"></div>
    </div>
  );
};

export default Works;
