import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { faEnvelope, faIdCard, faMailForward, faPhone, faSignOut, faUserCheck, faUserCircle, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css";
import { useState } from "react";
import { getCurrentUser, logout } from "../../services/auth";

function Navbar() {
    //agregado anthony
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //const obj = JSON.parse(atob(getCurrentUser().split('.')[1]));
    function handleLogout() {
        logout();
        window.location.reload();
    }
    
    return (
        <Dropdown>
            <div className="navbar bg-dark text-center text-white">
                <div className="nav_logo"> <p className="d-inline mx-2">NombreUSUARIO</p></div>
                <div className="nav_items">
                    <Dropdown.Toggle className="toggle" variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faUserCircle} /> Gestor
                    </Dropdown.Toggle>
                </div>
            </div>
            <Dropdown.Menu>
                <Dropdown.Item onClick={handleShow}><FontAwesomeIcon icon={faUserCheck} /> Perfil de Usuario</Dropdown.Item>
                <Offcanvas backdrop={false} placement={'end'} show={show} onHide={handleClose}>

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><FontAwesomeIcon icon={faUserEdit} /> Perfil</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <h4><FontAwesomeIcon icon={faIdCard} /> Nombre y Apellidos</h4>
                        <h5>user.name</h5>
                        <br />
                        <h4><FontAwesomeIcon icon={faPhone} /> Telefono</h4>
                        <h5>user.phone_number</h5>
                        <br />
                        <h4><FontAwesomeIcon icon={faEnvelope} /> Email de Usuario</h4>
                        <h5>user.email</h5>

                    </Offcanvas.Body>
                </Offcanvas>
                <Dropdown.Item href="login"><FontAwesomeIcon icon={faSignOut} />Cerrar Sesion</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Navbar;