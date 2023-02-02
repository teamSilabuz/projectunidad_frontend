import React, {useState} from "react";
import "./Navbar.css"

function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo"> NombreAPP</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> Inicio</a>
                <a href="#"> Cerrar Sesion</a>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
export default Navbar;