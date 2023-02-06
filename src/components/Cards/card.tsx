import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import img1 from '../../images/credencial.png';
import img2 from "../../images/candado1.jpg"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faServer, faUserCircle, faCommentSms, faEnvelope, faX, faArrowTurnRight, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import "./Card.css"
import img3 from "../../images/password.jpg";
import img4 from "../../images/smscorreo.png";
import { Props } from "../../interfaces/credenciales";


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


export const CardFunction: React.FC<Props> = ({ credencial }) => {

    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => setShowChange(false);
    const handleShowChange = () => setShowChange(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="card" style={{ width: '26rem' }}>
            <Card.Img className="mt-4" src={`https://cdn.worldvectorlogo.com/logos/${credencial.name}.svg`} />
            <Card.Body>
                <Card.Title style={styles.body} >{credencial.name}</Card.Title>
                <Card.Text style={styles.body}>
                    Email:{credencial.username_ext}
                </Card.Text><Button variant="primary" onClick={handleShow} ><FontAwesomeIcon icon={faKey} /> Cambiar password</Button>{' '}
                <Button variant="info" onClick={handleShowChange}><FontAwesomeIcon icon={faMailBulk} /> Enviar password</Button>
            </Card.Body>

            <Card.Footer className="text-muted">
                <Modal show={showChange} onHide={handleCloseChange}>
                    <Modal.Header closeButton>
                        <Modal.Title> Credenciales <FontAwesomeIcon icon={faUserLock} /> </Modal.Title>
                    </Modal.Header>
                    <img
                        src={img4}
                        alt="img4"
                        style={{ height: '50%', width: '90%', display: "block", margin: "0 auto" }}
                    />
                    <Modal.Title> <FontAwesomeIcon icon={faArrowTurnRight} /> Recibe tus credenciales en : </Modal.Title>
                    <Modal.Footer>
                        <Button variant="secondary" className="btn btn-primary position-relative" onClick={handleCloseChange}>
                            <FontAwesomeIcon icon={faCommentSms} /> SMS </Button>
                        <Button variant="primary" onClick={handleCloseChange}>
                            <FontAwesomeIcon icon={faEnvelope} /> Correo </Button>
                        <Button variant="danger" onClick={handleCloseChange}>
                            <FontAwesomeIcon icon={faX} /> Salir </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Credenciales <FontAwesomeIcon icon={faUserLock} /></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <img
                                    src={img3}
                                    alt="img3"
                                    style={{ height: '50%', width: '100%', display: "block", margin: "0 auto" }}
                                />
                                <Modal.Title> Cambiar password <FontAwesomeIcon icon={faKey} /> :  </Modal.Title>
                                <Form.Control autoFocus type="password" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} > <FontAwesomeIcon icon={faKey} /> Confirmar nuevo password</Button>
                        <Button variant="danger" onClick={handleClose}> <FontAwesomeIcon icon={faX} /> Cancelar </Button>
                    </Modal.Footer>
                </Modal>
                <small className="text-muted">Ultima vez modificado: {credencial.createdAt}</small>
            </Card.Footer>
        </Card>
    );
};

export default CardFunction;

