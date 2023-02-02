import React from "react";
import Card from "./card";
import "./Card.css"
function Cards() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <Card/>
                </div>
                <div className="col-md-5">
                    <Card/>
                </div>
                <div className="col-md-5">
                    <Card/>
                </div>
                <div className="col-md-5">
                    <Card/>
                </div>
            </div>
        </div>
    );
};

export default Cards;