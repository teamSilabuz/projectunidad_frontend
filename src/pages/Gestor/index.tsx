import "./Gestor.css";
import {Footer,Cards,Navbar} from "../../components";
function Gestor(){
    return(
        <div className="App">
            <Navbar/>
            <Cards/>
            <Footer/>
        </div>
    );
};  
export {Gestor};
