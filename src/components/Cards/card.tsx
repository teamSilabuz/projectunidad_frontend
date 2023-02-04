import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import img1 from '../../images/credencial.png';
import img2 from "../../images/candado1.jpg"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faServer, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import "./Card.css"

const styles = {
    primary: {
        background: "rgba(185, 128, 6, 0.2)"
    },
    footer: {
        background: "black"
    },
    body: {
        background: "white"
    }
}

function CardFunction() {

    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => setShowChange(false);
    const handleShowChange = () => setShowChange(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <Card className="card" style={{ width: '26rem' }}>
            <Card.Img variant="" src="https://cdn.worldvectorlogo.com/logos/vercel.svg" />
            <Card.Body>
                <Card.Title style={styles.body} >Nombredaadsasddasaa Appas</Card.Title>
                <Card.Text style={styles.body}>
                    Email:sdasdaasafasdadsaddasda@gmail.com
                </Card.Text><Button variant="primary" onClick={handleShow} ><FontAwesomeIcon icon={faKey} />Cambiar password</Button>{' '}
                <Button variant="info" onClick={handleShowChange}><FontAwesomeIcon icon={faMailBulk} />Enviar password</Button>
            </Card.Body>

            <Card.Footer className="text-muted">
                <Modal show={showChange} onHide={handleCloseChange}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Credenciales
                        </Modal.Title>
                    </Modal.Header>
                    <img
                        src={img1}
                        alt="img1"
                        style={{ display: "block", margin: "0 auto" }}
                    />
                    <Modal.Body>Por donde quieres recibir tus credenciales?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn btn-primary position-relative" onClick={handleCloseChange}>
                            SMS
                        </Button>
                        <Button variant="secondary" onClick={handleCloseChange}>
                            Correo
                        </Button>
                        <Button variant="primary" onClick={handleCloseChange}>
                            Salir
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Credenciales</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <img
                                    src={img2}
                                    alt="img2"
                                    style={{ display: "block", margin: "0 auto" }}
                                />
                                <Form.Label>Cambiar password</Form.Label>
                                <Form.Control autoFocus type="password" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Confirmar password
                        </Button>
                    </Modal.Footer>
                </Modal>
                <small className="text-muted">Ultima vez modificado: fecha de actualizacion</small>
            </Card.Footer>
        </Card>

    );
};

export default CardFunction;