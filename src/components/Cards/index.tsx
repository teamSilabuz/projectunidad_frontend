import React from "react";
import Card from "./card"
import "./Card.css"

function Cards() {
    return(
        <div className="container p-1">
            <div className="row">

                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                
            </div>
        </div>
    );
};

export default Cards;