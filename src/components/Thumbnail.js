import React from "react";

function Thumbnail(props) {
    return (
        <div className={thumbnail}>
            <img src="{props.img.src}" alt="{props.img.alt}"/>
            <div>
                <img className={`avatar`} src="{props.avatar}" alt=""/>
                <div className={`meta`}>
                    <h3 className={`video-title`}>{props.title}</h3>
                    <div className={`meta-data`}>
                        <p className={`video-creator`}>{props.creator}</p>
                        <p className={`video-views`}>{props.views} de vues</p>
                        <p className={`video-date`}>il y a {props.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thumbnail;