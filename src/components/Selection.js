import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [nextBackground, setBackground] = useState("");

  const backgroundChangeHandler = () => {
    // const{nextBackground} = props
    setBackground(props.applyColor);
    // props.applyColor(setBackground);
  };

  //   const styleSelection = props.nextBackground;
  //   console.log(nextNewBackground);

  return (
    <div
      className="fix-box"
      onClick={backgroundChangeHandler}
      style={{ background: nextBackground }}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
