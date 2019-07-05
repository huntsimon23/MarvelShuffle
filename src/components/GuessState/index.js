import React from "react";
import "./style.css";

function GuessState(props) {
  return (
    <h4 className="guessclick">
      {(props.guessState ? "Good guess!" : "Nope nope nope.")}
    </h4>
  );
}

export default GuessState;
