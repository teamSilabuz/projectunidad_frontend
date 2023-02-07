import { useState } from "react";
import { IExternalCredential } from "../../interfaces/externCrerdential";
import { getCurrentUser } from "../../services/auth";
import { saveExtCredentials } from "../../services/extern-credential";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./ExtCredencial.css";

type Props = {}

const ExtCredential: React.FC<Props> = () => {
    const obj = JSON.parse(atob(getCurrentUser().split('.')[1]))

    const initialExCredentialState = {
        url: '',
        name: '',
        username_ext: '',
        password_ext: '',
        id_gestor: 0,
    };
    const [formData, setFormData] = useState<IExternalCredential>(initialExCredentialState)
    const [message, setMessage] = useState<string>("");
    const [successful, setSuccessful] = useState<boolean>(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleExtCredent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formValue = {
            url: formData.url,
            name: formData.name,
            username_ext: formData.username_ext,
            password_ext: formData.password_ext,
            id_gestor: obj.id,
        }
        setMessage("");
        saveExtCredentials(formValue).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                setFormData(() => initialExCredentialState)
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.error) ||
                    error.message ||
                    error.toString();
                setMessage(resMessage);
            }
        );
        console.log(formValue);
    };
    return (
        <div className="App">
            <Navbar />
            <div className="site-externo">
                <div className="head-externa">
                    <h2>Sitio Externo</h2>
                    <p>Simulación</p>
                </div>
                <div className="body-externa">
                    {message && (
                        <div className="form-group mt-2">
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <form method="post" onSubmit={handleExtCredent} className="row mb-2 modal-cont">
                        <div className="col-12 row-externa">
                            <label htmlFor="exampleFormControlInput1" className="form-label d-flex">URL:</label>
                            <input type="text" name="url" className="form-control" id="url" value={formData.url} onChange={handleInputChange} placeholder="Url del sitio externo" />
                        </div>
                        <div className="col-12 row-externa">
                            <label htmlFor="name" className="form-label d-flex">Name:</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="Name del sitio externo" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="col-12 row-externa">
                            <label htmlFor="name" className="form-label d-flex">Username Ext:</label>
                            <input type="text" className="form-control" id="username_ext" name="username_ext"
                                value={formData.username_ext} onChange={handleInputChange} placeholder="Usuario del sitio externo" />
                        </div>
                        <div className="col-12 row-externa">
                            <label htmlFor="name" className="form-label d-flex">Password Ext:</label>
                            <input type="password" className="form-control" id="password_ext" name="password_ext"
                                value={formData.password_ext} onChange={handleInputChange} placeholder="Password del sitio externo" />
                        </div>

                        <div className="col-12 mt-4 footer-externo">
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-primary me-4 w-25 p-2">Añadir</button>
                                <a href="/home" className="btn btn-secondary w-25 p-2">Cancelar</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default ExtCredential;