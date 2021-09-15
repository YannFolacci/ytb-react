import React from "react";

function Chip(props) {
    return (
        <p className={`chip ${props.dark ? "dark" : ""}`}>{props.title}</p>
    );
}

export default Chip;