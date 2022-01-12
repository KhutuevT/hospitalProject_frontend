import React from "react";
import "./Header.scss";

const Header = ({ headerText }) => {
  return (
    <div className="header-div">
      <img className="logo-img" src="/images/Logo.svg" />
      <p className="header-text">{headerText}</p>
    </div>
  );
}

Header.defaultProps = { headerText: "Зарегистрироваться в системе" };
export default Header;
