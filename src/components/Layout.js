import React from "react";

function Layout(props) {
    return (
        <div className={`layout ${props.column ? "column" : ""}`}>
            {props.title ? <h1>{props.title}</h1> : ''}
            {props.children}
        </div>
    );
}

export default Layout;