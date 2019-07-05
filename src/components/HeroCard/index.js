import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <div className="card img-fluid img-thumbnail">
          <img src={props.link} className="card-img-top heropic" alt={props.link} />
          <div className="card-body">
          <p className="card-text">{props.name}</p>
          </div>
    </div>
  );
}

export default HeroCard;
