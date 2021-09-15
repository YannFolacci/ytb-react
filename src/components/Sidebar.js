import React from "react";

function Sidebar(props) {
    return (
        <nav>
            <ul>
                {props.children}
            </ul>
        </nav>
    );
}

export default Sidebar;