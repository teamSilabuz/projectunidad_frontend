import CardFunction from "./card"
import "./Card.css"
import { Row } from "react-bootstrap";
function Cards() {
    return(
    <Row xs={1} md={2} className="g-4">
                <div className="col-md-4">
                    <CardFunction/>
                </div>
                <div className="col-md-4">
                    <CardFunction/>
                </div>
                <div className="col-md-4">
                    <CardFunction/>
                </div>
                <div className="col-md-4">
                    <CardFunction/>
                </div>
        </Row>
    );
};

export default Cards;