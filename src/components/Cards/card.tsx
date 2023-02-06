import React, { useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk, faCommentSms, faEnvelope, faX, faArrowTurnRight, faUserLock} from "@fortawesome/free-solid-svg-icons";
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

    const [successful, setSuccessful] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const [error, setError] = useState(null);
    
    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));

    const dataBoot={
        id_user: obj.id,
        id_credencial:21
    }

    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const id_credencial = 2

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
 
    const handleSubmit = (event: any) => {
        event.preventDefault();
        axios.put('http://localhost:8000/api/v1/user/updatepassexterno', {
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
                        <Form 
                            onSubmit={handleSubmit} 
                        >
                            <Form.Group controlId="password">
                            <img
                                    src={img3}
                                    alt="img3"
                                    style={{ height: '50%', width: '100%', display: "block", margin: "0 auto"  }}
                                />
                            
                            <Modal.Title>Escribir nuevo password <FontAwesomeIcon icon={faKey} />:</Modal.Title>
                            <Form.Control
                                autoFocus
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Modal.Title>Confirmar password:</Modal.Title>
                            <Form.Control
                                autoFocus
                                type="password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                            />
                            {error && <p style={{ color: "red" }}>{error}</p>}
                            <Button type="submit"> <FontAwesomeIcon icon={faKey}/> Confirmar nuevo password  </Button> {' '}
                            </Form.Group>
                            <Button variant="danger" onClick={handleClose}> <FontAwesomeIcon icon={faX}/> Cancelar </Button>
                        </Form>
                        
                    </Modal.Body>
                    
                </Modal>
                <small className="text-muted">Ultima vez modificado: fecha de actualizacion</small>
            </Card.Footer>
        </Card>
    );
};

export default CardFunction;

