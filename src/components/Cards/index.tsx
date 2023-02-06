import CardFunction from "./card"
import "./Card.css"
import { Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Response, CredencialExterna } from "../../interfaces/credenciales";
import { getCurrentUser } from "../../services/auth";


export const Cards: React.FC = () => {
    const API_URL = process.env.REACT_APP_API_EXT_CARD
    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));
    const [credenciales, setCredenciales] = useState<CredencialExterna[]>([]);
    useEffect(() => {
        fetch(API_URL + String(obj.id))
            .then(response => response.json())
            .then((data: Response) => {
                setCredenciales(data.message.credencial_Externa);
            });
    }, []);
    return (
        <Row xs={1} md={2} className="g-1">

            {credenciales.map(credencial => (
                <div className="col-md-4">
                    <CardFunction key={credencial.id} credencial={credencial} />
                </div>
            ))}
        </Row>
    );
};

export default Cards;