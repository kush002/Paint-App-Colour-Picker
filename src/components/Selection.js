import React, { useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const [nextBackground, setBackground] = useState();

  const backgroundChangeHandler = () => {
    // const{nextBackground} = props
    //   setBackground(nextNewBackground)
    console.log(props.style);
    setBackground(props.style);
  };

  //   const styleSelection = props.nextBackground;
  // console.log(nextBackground);

  return (
    <div
      className="fix-box"
      onClick={backgroundChangeHandler}
      style={nextBackground}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
