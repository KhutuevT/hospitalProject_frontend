import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RegistrationForm from "../Forms/RegistrationForm/RegistrationForm";
import AuthorizationForm from "../Forms/AuthorizationForm/AuthorizationForm";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page-div main-page-img">
        <img className="hospital-img" src="/images/Vector.svg" alt='' /> 
      </div> 
      <div className="main-page-div main-page-form">
        <Switch>
          <Route path="/registration">
            <RegistrationForm />
          </Route>
          <Route path="/authorization">
            <AuthorizationForm />
          </Route>
          <Redirect from="/" to="/registration" />
        </Switch>
      </div>
    </div>
  );
}

export default MainPage;
