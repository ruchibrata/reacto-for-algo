import React, { useState } from "react";
import { ChromePicker } from "react-color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import "./Color.css";

function Color(props) {
  const [displayed, setDisplayed] = useState(false);
  const [color, setColor] = useState("#000000");

  const popover = {
    position: "absolute",
    zIndex: "2",
  };
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
  };

  function handleClick() {
    setDisplayed(true);
  }
  function handleClose() {
    setDisplayed(false);
  }
  function handleChange(pickerColor) {
    setColor(pickerColor.hex);
    props.handleColor(pickerColor.hex);
  }

  return (
    <div className="color">
      <FontAwesomeIcon
        onClick={handleClick}
        title="choose color"
        className="fa-icon"
        icon={faPalette}
      />
      {displayed ? (
        <div style={popover}>
          <div style={cover} onClick={handleClose} />
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
}

export default Color;
