import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({})
  };
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}

          <p>Perfil</p>
        </div>
        <ul>

        { hasUser ? 
          <Fragment>
            <li>
              <Link to="/">{user.email}</Link>
            </li>  
            <li>
              <Link to="#logout">Cerrar Sesión</Link>
            </li>
          </Fragment>
            : <li>
            <Link to="/login">Iniciar Sesión</Link>
            </li>
          }
        </ul>
      </div>
    </header>
  );
};

//traer los elementos del estado
const mapStateToProp = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};
export default connect(mapStateToProp, mapDispatchToProps)(Header);
