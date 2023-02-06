import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import img1 from '../../images/credencial.png';
import img2 from "../../images/candado1.jpg"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faServer, faUserCircle, faCommentSms, faEnvelope, faX, faArrowTurnRight, faUserLock} from "@fortawesome/free-solid-svg-icons";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import "./Card.css"
import img3 from "../../images/password.jpg";
import img4 from "../../images/smscorreo.png";
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

function CardFunction() {

    const [showChange, setShowChange] = useState(false);
    const handleCloseChange = () => {setShowChange(false); setMessage("");}
    const handleShowChange = () => setShowChange(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));
    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const dataBoot={
        id_user: obj.id,
        id_credencial:21
    }

    const handleSendSMS= (event: React.FormEvent<HTMLFormElement>) => { 
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
    const handleSendEmail= (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        setMessage("email click");
        sendEmail(dataBoot,false).then(
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

    return (
        <Card className="card" style={{ width: '26rem' }}>
            <Card.Img variant="" src="https://cdn.worldvectorlogo.com/logos/vercel.svg" />
            <Card.Body>
                <Card.Title style={styles.body} >Nombredaadsasddasaa Appas</Card.Title>
                <Card.Text style={styles.body}>
                    Email:sdasdaasafasdadsaddasda@gmail.com
                </Card.Text><Button variant="primary" onClick={handleShow} ><FontAwesomeIcon icon={faKey} /> Cambiar password</Button>{' '}
                <Button variant="info" onClick={handleShowChange}><FontAwesomeIcon icon={faMailBulk} /> Enviar password</Button>
            </Card.Body>

            <Card.Footer className="text-muted">
                <Modal show={showChange} onHide={handleCloseChange}>              
                    <Modal.Header closeButton>
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
                        style={{ height: '50%', width: '90%', display: "block", margin: "0 auto" }}
                    />
                    <Modal.Title> <FontAwesomeIcon icon={faArrowTurnRight}/> Recibe tus credenciales en : </Modal.Title>
                    <Modal.Footer>
                        <form method="post" onSubmit={handleSendSMS}>
                        <Button type="submit" variant="secondary" className="btn btn-primary position-relative">
                            <FontAwesomeIcon icon={faCommentSms}/> SMS </Button>
                        </form>
                        <form  method="post" onSubmit={handleSendEmail}>
                        <Button type="submit" variant="primary"> 
                        <FontAwesomeIcon icon={faEnvelope}/> Correo </Button>
                        </form>
                        
                        <Button variant="danger" onClick={handleCloseChange}> 
                        <FontAwesomeIcon icon={faX}/> Salir </Button>
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
                                    style={{ height: '50%', width: '100%', display: "block", margin: "0 auto"  }}
                                />
                                <Modal.Title> Cambiar password <FontAwesomeIcon icon={faKey}/> :  </Modal.Title> 
                                <Form.Control autoFocus type="password" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} > <FontAwesomeIcon icon={faKey} /> Confirmar nuevo password</Button>
                        <Button variant="danger" onClick={handleClose}> <FontAwesomeIcon icon={faX}/> Cancelar </Button>
                    </Modal.Footer>
                </Modal>
                <small className="text-muted">Ultima vez modificado: fecha de actualizacion</small>
            </Card.Footer>
        </Card>
    );
};

export default CardFunction;

