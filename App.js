import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
// import { Greet } from './Components/Greet'
import Hello from './Components/Hello'


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      <Hello />

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
