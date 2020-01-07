import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Describe from './components/Describe';
import Weather from './components/Weather';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <Describe />
        <p>My App</p>
        <Weather />
      </header>
    </div>
  );
}

export default App;
