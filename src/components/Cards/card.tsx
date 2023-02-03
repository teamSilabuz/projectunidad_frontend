import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import img1 from '../../images/credencial.png';
import img2 from "../../images/candado1.jpg"


function GestorCard() {
    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => setShowChange(false);
    const handleShowChange = () => setShowChange(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
            
        <div className="card">
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <img className="" src="https://brandemia.org/sites/default/files/sites/default/files/google_icono_despues.jpg" alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h4 className="card-title">Nombre App</h4>
                    <p className="card-text">Email: asada@gmail.com</p>
                </div>
            </div>

            <div className="card-footer">
                <div className="buttons">
                    <div className="action_btn">
                        <button name="submit" className="action_btn submit" type="submit" value="Save" onClick={handleShow} >Cambiar password</button>
                        <button name="submit" className="action_btn cancel" onClick={handleShowChange}>Enviar password</button>

                        
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
                        

                    </div>
                </div>
                <small className="text-muted">Last updated: fecha de actualizacion</small>
            </div>
        </div>
        
    );
};
export default GestorCard;