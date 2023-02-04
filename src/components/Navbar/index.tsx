import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentUser, logout } from "../../services/auth";
import "./Navbar.css"
import { faSignOut, faUserCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css";

function Navbar() {
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
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faUserCircle} /> Gestor
                    </Dropdown.Toggle>
                </div>
            </div>
            <Dropdown.Menu>
                <Dropdown.Item href="<ProfileUser/>"><FontAwesomeIcon icon={faUserCheck} /> Perfil de Usuario</Dropdown.Item>
                <Dropdown.Item href="<LoginPage/>"><FontAwesomeIcon icon={faSignOut} />Cerrar Sesion</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Navbar;