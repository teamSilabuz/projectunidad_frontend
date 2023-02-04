
import { Link} from 'react-router-dom';
import { useState } from "react";
import * as Yup from "yup";
import { register } from "../../services/auth";
import IUser from '../../interfaces/user';
import { ErrorMessage, Field, Form, Formik } from 'formik';

type Props = {}

const Register: React.FC<Props> = () =>{
  const [successful, setSuccessful] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const initialValues: IUser = {
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .test(
        "len",
        "Nombre debe contener entre 3 y 20 caracteres.",
        (val: any) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("Este campo es requerido"),
    phone: Yup.string().required("Este campo es requerido"),
    email: Yup.string()
      .email("Ingrese un email valido.")
      .required("Este campo es requerido"),
    password: Yup.string()
      .test(
        "len",
        "La contraseña debe contener entre 6 y 40 caracteres.",
        (val: any) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("Ingrese contraseña"),
    confirmPassword: Yup.string()
    .required("Este campo es requerido")
    .oneOf([Yup.ref("password"), null], "Contraseñas no coinciden")
  });
  const handleRegister = (formValue: IUser) => {
    const { fullname, phone, email, password,confirmPassword } = formValue;

    register(fullname, phone, email, password,confirmPassword).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        setSuccessful(false);
      }
    );
  };

    return (
      <div className="h-100 mt-5">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-5 col-xl-8 col-lg-8 col-md-9 col-sm-9">
              <div className="card shadow-lg w-100">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Registrar Cuenta</h1>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}
                  >
                    {({ errors, touched }) => (
                    <Form>
                        {message && (
                            <div className="form-group mt-2">
                                <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message}
                                </div>
                            </div>
                        )}
                        <div className="mb-3">
                          <label className="mb-2 text-muted" htmlFor="fullname">Nombres</label>
                          <Field id="fullname" type="text" className={'form-control'+(errors.fullname && touched.fullname ? ' is-invalid' : '')} name="fullname"/>
                          <ErrorMessage name="fullname" component="div"className="invalid-feedback"/>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2 text-muted" htmlFor="phone">Telefono</label>
                          <Field id="phone" type="text" className={'form-control'+(errors.phone && touched.phone ? ' is-invalid' : '')} name="phone"/>
                          <ErrorMessage name="phone" component="div"className="invalid-feedback"/>
                        </div>
                        <div className="mb-3">
                          <label className="mb-2 text-muted" htmlFor="email">Correo</label>
                          <Field id="email" type="email" className={'form-control'+(errors.email && touched.email ? ' is-invalid' : '')} name="email"/>
                          <ErrorMessage name="email" component="div"className="invalid-feedback"/>
                        </div>

                        <div className="row">
                          <div className="col">
                            <label className="text-muted form-label" htmlFor="password">Contraseña</label>
                            <Field id="password" type="password" className={'form-control'+(errors.password && touched.password ? ' is-invalid' : '')} name="password"/>
                            <ErrorMessage name="password" component="div"className="invalid-feedback"/> 
                          </div>
                          <div className="col">
                            <label className="text-muted form-label" htmlFor="confirmPassword">Confirmar contraseña</label>
                            <Field id="confirmPassword" type="password" className={'form-control'+(errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} name="confirmPassword"/>
                              <ErrorMessage name="confirmPassword" component="div"className="invalid-feedback"/>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                          <button type="submit" className="btn btn-primary ms-auto w-25">
                            Registrar
                          </button>
                        </div>
                        
                    </Form>
                    )}
                  </Formik>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    ¿Ya tienes una cuenta? <Link to="/login" className="text-dark">Iniciar Sesion</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

};
export default Register;