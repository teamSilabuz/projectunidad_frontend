import { Formik, Field, Form, ErrorMessage } from "formik";
import { NavigateFunction, useNavigate,Link  } from 'react-router-dom';
import { useState } from "react";
import * as Yup from "yup";
import { login } from "../../services/auth";

type Props = {}

const Login: React.FC<Props> = () =>{
    let navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");

    const initialValues: {username: string;password: string;} = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Ingrese un email valido.").required("Ingrese un correo"),
        password: Yup.string().required("Ingrese una contraseña"),
    });

    const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue;
        setMessage("");
        setLoading(true);
        login(username, password).then(
            () => {
              navigate("/home");
              window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.error) ||
                error.message ||
                error.toString();
      
              setLoading(false);
              setMessage(resMessage);
            }
          );
    };
    return (     
      <div className="h-100 mt-5">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">

              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Iniciar Sesión</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                  >
                    {({ errors, touched}) => (
                    <Form>
                        {message && (
                            <div className="form-group mt-2">
                                <div className="alert alert-danger" role="alert">
                                {message}
                                </div>
                            </div>
                        )}
                        <div className="mb-3">
                          <label className="mb-2 text-muted" htmlFor="username">Correo</label>
                          <Field id="username" type="email" className={'form-control'+(errors.username && touched.username ? ' is-invalid' : '')} name="username"/>
                          <ErrorMessage name="username" component="div"className="invalid-feedback"/>
                        </div>

                        <div className="mb-3">
                          <div className="mb-2 w-100">
                            <label className="text-muted" htmlFor="password">Contraseña</label>
                            
                          </div>
                          <Field id="password" type="password" className={'form-control'+(errors.password && touched.password ? ' is-invalid' : '')} name="password"/>
                          <ErrorMessage name="password" component="div"className="invalid-feedback"/>
                        </div>

                        <div className="d-flex align-items-center">
                          <button type="submit" className="btn btn-primary ms-auto"disabled={loading}>
                            Ingresar
                          </button>
                        </div>
                        
                    </Form>
                    )}
                  </Formik>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    ¿Aún no tienes una cuenta? <Link to="/register" className="text-dark">Registrate</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

};
export default Login;