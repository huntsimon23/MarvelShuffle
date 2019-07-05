import React from "react";
import "./style.css";

function Score(props) {
  return (
    <h4 className="score">
      Your Score: {(props.guessTally)} ||
    </h4>
  );
}
export default Score;
