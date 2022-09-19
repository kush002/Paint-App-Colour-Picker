import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [nextNewBackground, setBackground] = useState("");

  const backgroundChangeHandler = () => {
    // const{nextBackground} = props
    setBackground(nextNewBackground)
    props.applyColor(setBackground);
  };

  // const styleSelection = props.nextBackground
  console.log(nextNewBackground);

  return (
    <div
      onClick={backgroundChangeHandler}
      className="fix-box"
      style={{ background: nextNewBackground }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
