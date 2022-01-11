import React from 'react';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import RegistrationForm from './components/RegistrationField/RegistrationForm';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <MainPage />
      </header>
    </div>
  );
}

export default App;
