import React from "react";
import "./CarouselComponent.css";
import Quote from "./quote.png";
import ReactStars from "react-stars";
const CarouselComponent = ({ item }) => {
  return (
    <div className="">
      <div className="carousel-card">
        <img src={Quote} className="carousel-icon" />
        <p className="carousel-text">{item.text}</p>
        <div className="carousel-stars">
          <ReactStars count={5} value={5} color2="aqua" />
        </div>
      </div>
      <div className="carousel-data">
      <img
        src="https://i.imgur.com/JgYD2nQ.jpg"
        className="rounded-circle"
        width="70"
      ></img>
      <h4>{item.name}</h4>
      <p>{item.post}</p>
      </div>
    </div>
  );
};

export default CarouselComponent;
