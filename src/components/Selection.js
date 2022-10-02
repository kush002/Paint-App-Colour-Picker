import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [nextBackground, setBackground] = useState({ background: "" });

  const backgroundChangeHandler = () => {
    // const{nextBackground} = props
    //   setBackground(nextNewBackground)
    console.log(props.applyColor);
    setBackground(props.applyColor );
  };

  //   const styleSelection = props.nextBackground;
  // console.log(nextBackground);

  return (
    <div
      className="fix-box"
      onClick={backgroundChangeHandler}
      style={{ background: nextBackground}}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
