import React from "react";
import "./style.css";

function TopScore(props) {
  return (
    <h4 className="">
      Top Score: {(props.highScore)}
    </h4>
  );
}
export default TopScore;

