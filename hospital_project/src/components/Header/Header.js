import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router";
import ButtonComponent from "../Elements/ButtonComponent/ButtonComponent";
import "./Header.scss";

const Header = () => {
  let headerText = "";
  const history = useHistory();
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
  const deleteToken = () => {
    localStorage.removeItem("token");
    history.push(`/`);
  };
  return (
    <div className="header-div">
      <div>
        <img className="logo-img" src="/images/Logo.svg" />
        <p className="header-text">{headerText}</p>
      </div>
      <div className="button-exit">
        {location.pathname === "/home" && (
          <ButtonComponent text={"Выход"} onClick={deleteToken} />
        )}
      </div>
    </div>
  );
};

export default Header;
