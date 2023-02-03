import React from "react";
import GestorCard from "./card";
import "./Card.css"

function Cards() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <GestorCard/>
                </div>
                <div className="col-md-5">
                    <GestorCard/>
                </div>
                <div className="col-md-5">
                    <GestorCard/>
                </div>
                <div className="col-md-5">
                    <GestorCard/>
                </div>
            </div>
        </div>
    );
};

export default Cards;