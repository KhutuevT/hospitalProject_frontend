import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import HomePage from './components/HomePage/HomePage';
import './App.scss';

const App = () =>  {
  return (
    <div className="App">
      <header>
        <Header />
        <Switch>
        <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
          <Redirect from="/" to="/registration" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
