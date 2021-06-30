import React from 'react';
import {Link} from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    return(
        <body>
            <div className="wrapper">
                <form role="form" className="login-form" action="">
                    <div className="form-header">
                        <h1>Bienvenido</h1>
                        <h2>Inicio de Sesión</h2>
                    </div>
                    <fieldset>
                        <div className="form-group">
                            <div className="form-input">
                                <input type="email" placeholder="usuario@correo.com.mx" required/>
                            </div> 
                        </div>
                        <div className="form-group">
                            <div className="form-input">
                                <input type="password" placeholder="Contraseña" required/>
                            </div>
                        </div>
                        <div>
                            <Link to="/Dashboard">
                                <div className="form-group">
                                    <button type="submit" className="form-button">
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div className="form-footer">
                            ¿No tienes una cuenta? <a href="#">Regístrate</a>
                        </div>
                    </fieldset>
                </form>
            </div>
        </body>
    );
}

export default LoginForm;