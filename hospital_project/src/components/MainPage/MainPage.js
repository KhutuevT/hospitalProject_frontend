import React from "react";
import RegistrationForm from "../RegistrationField/RegistrationForm";
import "./MainPage.scss";

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
