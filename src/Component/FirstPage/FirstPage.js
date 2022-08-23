import React from "react";
import "./FirstPage.css";
import telegram from "./telegram.png";
import brain from "./brain.png";
import idea from "./idea.png";
const FirstPage = () => {
  return (
    <div className="first-page">
      <div className="first-page-container">
        <p className="first-page-heading1">CREATIVE MIND, CREATIVE WORKS.</p>
        <div className="first-page-heading2">
          We are digital <br />
          agency.
        </div>
        <button className="first-page-button">GETTING STARTED</button>
      </div>
      <div className="firstPage-card">
        <div class="card-component cardddd">
          <div class="card-body">
            <img src={telegram} alt="telegram" />

            <h5 class="card-title">Future Concept.</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card-component cardddd" style={{ border: "3px solid aqua" }}>
          <div class="card-body">
            <img src={brain} alt="brain" />

            <h5 class="card-title">The Big Ideas.</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="cardbar"></div>
        </div>
        <div class="card-component cardddd">
          <div class="card-body">
            <img src={idea} alt="idea" />

            <h5 class="card-title">Creative Solutions.</h5>
            <h6 class="card-subtitle mb-2 text-muted"></h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
