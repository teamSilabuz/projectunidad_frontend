import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faCommentSms, faEnvelope, faX, faArrowTurnRight, faUserLock } from "@fortawesome/free-solid-svg-icons";
import "./Card.css"
import img3 from "../../images/password.jpg";
import img4 from "../../images/smscorreo.png";
import { Props } from "../../interfaces/credenciales";
import { sendEmail, sendSMS } from "../../services/boot";
import { getCurrentUser } from "../../services/auth";

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
    const handleCloseChange = () => { setShowChange(false); setMessage(""); }
    const handleShowChange = () => setShowChange(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const [error, setError] = useState(null);

    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));

    const dataBoot = {
        id_user: obj.id,
        id_credencial: credencial.id
    }

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const handleSendSMS = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendSMS(dataBoot).then(
            () => {
                setMessage("Se envieron tus credenciales a tu número telefónico");
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.error) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    }
    const handleSendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        sendEmail(dataBoot, false).then(
            () => {
                setMessage("Credenciales enviados con éxito. Revise su bandeja de correo electronico.");
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.error) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    }

    const urlUpdatePassExterno = String(process.env.REACT_APP_DOMAIN_API) + "/user/updatepassexterno"
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const id_credencial = credencial.id
        console.log(id_credencial)
        axios.put(urlUpdatePassExterno, {
            id_credencial,
            password,
            re_password: rePassword,
        })
            .then((response) => {
                Swal.fire(
                    'Buen trabajo!',
                    'Se actualizo tu contraseña!',
                    'success'
                )

            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal!',
                })
            });
    };


    return (
        <Card id="card-item">
            <Card.Img className="logoCard" src={`https://cdn.worldvectorlogo.com/logos/${credencial.name}.svg`} />
            <Card.Body>
                <Card.Title style={styles.body} >{credencial.name}</Card.Title>
                <Card.Text style={styles.body}>{credencial.username_ext}</Card.Text>
                <div className="card-bottons">
                    <Button variant="primary" onClick={handleShow} ><FontAwesomeIcon icon={faKey} /> <p>Cambiar password</p></Button>{' '}
                    <Button variant="info" onClick={handleShowChange}><FontAwesomeIcon icon={faMailBulk} /> <p>Send password</p></Button>
                </div>
            </Card.Body>

            <Card.Footer className="text-muted">
                <Modal show={showChange} onHide={handleCloseChange} backdrop="static" centered className="modal-cont">
                    <Modal.Header closeButton className="modal-head">
                        <Modal.Title> Credenciales <FontAwesomeIcon icon={faUserLock} /> </Modal.Title>
                    </Modal.Header>
                    <div>
                        {message && (
                            <div className="form-group m-3 ">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </div>
                    <img
                        src={img4}
                        alt="img4"
                        style={{ height: '50%', width: '80%', display: "block", margin: "0 auto" }}
                    />
                    <Modal.Title className="modal-tit">
                        <FontAwesomeIcon icon={faArrowTurnRight} /> Recibe tus credenciales en :
                        <div className="modal-sms-gmail">
                            <form method="post" onSubmit={handleSendSMS}>
                                <Button type="submit" variant="secondary" className="btn btn-primary position-relative">
                                    <FontAwesomeIcon icon={faCommentSms} size="3x" beat /> SMS
                                </Button>
                            </form>
                            <form method="post" onSubmit={handleSendEmail}>
                                <Button type="submit" variant="primary">
                                    <FontAwesomeIcon icon={faEnvelope} size="3x" bounce /> Email
                                </Button>
                            </form>
                        </div>
                    </Modal.Title>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseChange}>
                            <FontAwesomeIcon icon={faX} /> Salir
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose} backdrop="static" centered className="modal-cont">
                    <Modal.Header closeButton className="modal-head">
                        <Modal.Title><FontAwesomeIcon icon={faUserLock} /> Actualización Credencial </Modal.Title>
                        <Modal.Title>{credencial.username_ext}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="password" className="modal-change-pass">
                                <img
                                    src={img3}
                                    alt="img3"
                                    style={{ height: '45%', width: '95%', display: "block", margin: "0 auto 20px" }}
                                />

                                <Modal.Title>Nuevo password <FontAwesomeIcon icon={faKey} /></Modal.Title>
                                <Form.Control
                                    autoFocus
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite su nuevo password"
                                    className="text-pass"
                                />
                                <Modal.Title>Confirmar password</Modal.Title>
                                <Form.Control
                                    autoFocus
                                    type="password"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                    placeholder="Confirme su password"
                                    className="text-pass"
                                />
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <Button type="submit"> <FontAwesomeIcon icon={faKey} /> Actualizar password  </Button> {' '}
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                    <FontAwesomeIcon icon={faX} /> Cancelar
                                </Button>
                            </Modal.Footer>
                        </Form>

                    </Modal.Body>
                </Modal>
                <small className="text-muted">Ultima vez modificado: {credencial.createdAt}</small>
            </Card.Footer>
        </Card>
    );
};

export default CardFunction;

