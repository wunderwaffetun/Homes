import React from "react";

const Workers = (props) =>(
    <div className="block border center" style={{Height: "450px"}}>
        <h3>{props.infoW[0]}</h3>
        <img src = {props.infoW[2]}></img>
        <p>{props.infoW[1]} </p>
    </div>
);

export default Workers;