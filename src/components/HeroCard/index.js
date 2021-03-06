import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <div className="card img-fluid img-thumbnail">
          <img src={props.link} className="card-img-top heropic" alt={props.link} onClick={() => props.tally(props.id)}/>
          <div className="card-body">
          <p className="card-text text-center">{props.name}</p>
          </div>
    </div>
  );
}

export default HeroCard;
