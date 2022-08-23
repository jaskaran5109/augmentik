import React from "react";
import telegram from "../Component/FirstPage/telegram.png";

const CardComponent = ({ item }) => {
  return (
    <>
      {item.image ? (
        <div
          class="card-component"
          style={{
            width: "28%",
            backgroundColor: "#262626",
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/3px-tile.png")',
            margin: "5px",
            borderBottom: "4px solid white",
            color:'white'
          }}
        >
          <div class="card-body">
            <img src={item.image} alt="graph" />
            <h5 class="card-title"style={{fontWeight:'bold'}}>{item.heading}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      ) : (
        <div
          class="card-component"
          style={{
            width: "28%",
            backgroundColor: "aqua",
            color: "black",
            margin: "5px",
            borderBottom: "4px solid white",
          }}
        >
          <div class="card-body">
            <div style={{ paddingTop: "60px" }}></div>
            <h5 class="card-title" style={{fontWeight:'bold'}}>{item.heading}</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardComponent;
