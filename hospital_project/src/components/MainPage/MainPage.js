import React from "react";
import "./MainPage.scss";
import RegistrationForm from "../RegistrationField/RegistrationForm";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-div main-page-img">
        <img className="hospital-img" src="/images/Vector.svg" />
      </div>
      <div className="main-page-div main-page-form">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default MainPage;
