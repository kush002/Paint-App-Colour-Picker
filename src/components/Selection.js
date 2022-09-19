import React,{useState} from "react";
import '../styles/Child.css'

const Selection = (props) => {
    const[background, setBackground] = useState("")

    const backgroundChangeHandler = () => {
        props.applyColor(setBackground)
    }
    
    // const styleSelection = props.nextBackground

    return <div onClick={backgroundChangeHandler} className="fix-box" style={{background}}>
        <h2 className="subheading">Selection</h2>
    </div>
};

export default Selection;
