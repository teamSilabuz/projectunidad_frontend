import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUserCheck, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import "./Navbar.css";

function Navbar() {

    return (
            <Dropdown>
            <div className="navbar bg-dark text-center text-white">
                <div className="nav_logo"> NombreAPP</div>
                <div className="nav_items">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FontAwesomeIcon icon={faUserCircle} /> Gestor
                    </Dropdown.Toggle>
                </div>
            </div>
            <Dropdown.Menu>
                <Dropdown.Item href="<ProfileUser/>"><FontAwesomeIcon icon={faUserCheck}/> Perfil de Usuario</Dropdown.Item>
                <Dropdown.Item href="<LoginPage/>"><FontAwesomeIcon icon={faSignOut} />     Salir</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
    );
}
export default Navbar;