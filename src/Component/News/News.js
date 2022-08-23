import React from "react";
import "./News.css";
import FirstImage from "../About/firstImage.jpg";
import SecondImage from "../About/secondImage.jpg";
import ThirdImage from "../About/thirdImage.jpg";
const News = () => {
  return (
    <div className="news">
      <h1 style={{ color: "white" }}>Latest News.</h1>
      <div style={{ color: "aqua" }}>CHECK OUT SOME OF OUR NEWS</div>
      <div className="news-images">
        <div class="card">
          <img class="card-img-top" src={ThirdImage} alt="Card image cap" />
          <div class="card-body" style={{backgroundColor:"#00000C",color: "white",textAlign: 'left' }}>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-primary" style={{backgroundColor:"transparent",color:"white",border:'1px solid aqua'}}>
              Read More
            </button>
          </div>
        </div>{" "}
        <div class="card">
          <img class="card-img-top" src={SecondImage} alt="Card image cap" />
          <div class="card-body" style={{backgroundColor:"#00000C",color: "white" ,textAlign: 'left'}}>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-primary" style={{backgroundColor:"transparent",color:"white",border:'1px solid aqua'}}>
            Read More
            </button>
          </div>
        </div>{" "}
        <div class="card">
          <img class="card-img-top" src={ThirdImage} alt="Card image cap" />
          <div class="card-body" style={{backgroundColor:"#00000C",color: "white",textAlign: 'left' }}>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-primary" style={{backgroundColor:"transparent",color:"white",border:'1px solid aqua'}}>
            Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
