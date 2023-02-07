import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faAdd, faEnvelope, faIdCard, faPhone, faSignOut, faUserCheck, faUserCircle, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css";
import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "../../services/auth";
import axios from "axios";

function Navbar() {
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleLogout() {
        logout();
        window.location.reload();
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));

    const url = String(process.env.REACT_APP_DOMAIN_API) + "/user/perfil"

    useEffect(() => {
        axios.get(url+`/${obj.id}`)
            .then(response => {
                setName(response.data.message.name);
                setEmail(response.data.message.email);
                setPhoneNumber(response.data.message.phone_number);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Dropdown>
            <div className="navbar bg-dark text-center text-white menu-perfil">
                <div className="nav_logo"> <p className="d-inline mx-2"> Passecure </p></div>
                <div className="nav_items">
                    <Dropdown.Toggle className="toggle" variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faUserCircle} /> Gestor
                    </Dropdown.Toggle>
                </div>
            </div>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}><FontAwesomeIcon icon={faUserCheck} /> Perfil de Usuario</Dropdown.Item>
                <Offcanvas backdrop={false} placement={'end'} show={show} onHide={handleClose}>

                    <Offcanvas.Header closeButton className="font-perfil-head">
                        <Offcanvas.Title><FontAwesomeIcon icon={faUserEdit} /> Perfil</Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body className="datos-perfil">
                        <strong>Nombre y Apellidos</strong>
                        <p className="datos-item"><FontAwesomeIcon icon={faIdCard} /> {name}</p>
                        <strong> Telefono</strong>
                        <p className="datos-item"><FontAwesomeIcon icon={faPhone} /> {phoneNumber} </p>
                        <strong> Email de Usuario</strong>
                        <p className="datos-item"><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
                    </Offcanvas.Body>
                </Offcanvas>
                <Dropdown.Item href="/external-credential"><FontAwesomeIcon icon={faAdd} /> Añadir credencial nueva</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} /> Cerrar Sesion</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Navbar;