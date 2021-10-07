import React from "react";
import "./Controls.css";
import Color from "./Color";
import Eraser from "./Eraser";

function Controls(props) {
  return (
    <div className="controls">
      <h2>Chalk Board</h2>
      <Color handleColor={props.handleColor} />
      <Eraser handleColor={props.handleColor} />
    </div>
  );
}

export default Controls;
