import React from "react";
import CardComponent from "../CardComponent";
import "./Service.css";
import Graph from "./chart.png";
import Pencil from "./pencil.png";
import Globe from "./globe.png";
import Bookmark from "./bookmark.png";
import BarChart from "./barchart.png";
const data = [
  {
    image: Graph,
    heading: "Digital Strategy",
  },
  {
    image: Pencil,
    heading: "UX Designs",
  },
  {
    heading: "UI Designs",
  },
  {
    image: Globe,
    heading: "Social Media",
  },
  {
    image: Bookmark,
    heading: "Design Concept",
  },
  {
    image: BarChart,
    heading: "Media Pairing",
  },
];
const Service = () => {
  return (
    <div className="service-page">
      <div className="service-heading-container">
        <div className="servicebar"></div>
        <div className="service-heading1">Services.</div>
      </div>
      <div className="service-heading2">OUR SERVICES FOR CLIENTS</div>
      <div className="service-card">
        {data.map((item, index) => {
          return <CardComponent item={item}/>;
        })}
      </div>
      <div className="servicebarr"></div>
    </div>
  );
};

export default Service;
