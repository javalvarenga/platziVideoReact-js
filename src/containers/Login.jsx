import React, { useState } from "react";
import {connect} from 'react-redux'
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import {loginRequest} from '../actions'

import "../assets/styles/components/Login.scss";

const Login = props => {
  const [form, setValues] = useState({
    email: "",
  });
  const handleInput = (event) => {
    //manejar el estado de los inputs
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form)//enviar el estado creado a nuestro estado
    props.history.push('/')
    //console.log(form); //imprimimos lo que se capturó del form
  };
  return (
    <section className="login">
      <section className="login__container">
        <h2>Iniciar Sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="email"
            className="input__login"
            type="text"
            placeholder="correo"
            onChange={handleInput}
          />
          <input
            name="password"
            className="input__login"
            type="password"
            placeholder="contraseña"
            onChange={handleInput}
          />
          <button type="submit" className="button">
            Iniciar Sesión
          </button>
          <div className="login_container--remember">
            <label>
              <input
                type="checkbox"
                name="remember"
                id="Cbox1"
                value="Checkbox"
              />
              recuerdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" />
            Iniciar Sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt="Twitter" />
            Iniciar Sesión con Twitter
          </div>
        </section>

        <p className="login__container--register">
          No tienes niguna cuenta
          <Link to="/register">Registrate</Link>
        </p>
      </section>
    </section>
  );
}; 

const mapDispatchToProps ={
  //traer la informacion de nuestro login
  loginRequest,

}

export default connect(null,mapDispatchToProps)(Login)