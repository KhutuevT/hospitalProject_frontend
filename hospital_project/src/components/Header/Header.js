import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  let headerText = "";

  const location = useLocation();

  switch (location.pathname) {
    case "/authorization":
      headerText = "Войти в систему";
      break;

    case "/registration":
      headerText = "Зарегистрироваться в системе";
      break;

    case "/home":
      headerText = "Приёмы";
      break;

    default:
      headerText = "";
      break;
  }
  
  return (
    <div className="header-div">
      <img className="logo-img" src="/images/Logo.svg" />
      <p className="header-text">{headerText}</p>
    </div>
  );
};

export default Header;
