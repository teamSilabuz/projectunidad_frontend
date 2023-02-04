import React, {useState} from "react";
import { getCurrentUser, logout } from "../../services/auth";
import "./Navbar.css"
import { Buffer } from 'buffer';
function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]))
    //const username= Buffer.from(getCurrentUser().split('.')[1],"base64")   
    function handleLogout (){
        logout();
        window.location.reload(); 
    }
    return(
        <div className="navbar bg-dark text-center text-white">
            <div className="nav_logo"> NombreAPP</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <a href="#"> Inicio</a>
                <p className="d-inline mx-2">{obj.email}</p>
                <button className=" mb-2 btn btn-outline-secondary" type="submit" onClick={handleLogout}> Cerrar Sesion</button>
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