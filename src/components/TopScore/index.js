import React from "react";
import "./style.css";

function TopScore(props) {
  return (
    <h4 className="topScore">
      Top Score: {props.highScore}
    </h4>
  );
}
export default TopScore;

