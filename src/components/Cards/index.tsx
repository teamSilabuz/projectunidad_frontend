import CardFunction from "./card"
import "./Card.css"
import { Row } from "react-bootstrap";
function Cards() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
            <div className="col-md-4">
                <CardFunction />
            </div>
             ))}
        </Row>
    );
};

export default Cards;