import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Card() {
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
                        <button name="submit" className="action_btn submit" type="submit" value="Save" >Change password</button>
                        <button name="submit" className="action_btn cancel" >Enviar password</button>
                        <Button variant="primary" onClick={handleShow}>
                            Credenciales
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Credenciales</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Por donde quieres recibir tus credenciales</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                SMS
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Correo
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Salir
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
export default Card;