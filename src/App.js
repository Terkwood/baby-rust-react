import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { loadWasm } from "./wasmLoader";

class App extends Component {
  constructor() {
    super();
    loadWasm(result => {
      const calculateFactorial = result.instance.exports['fact'];
      const x = 5;
      alert(`the factorial of ${ x } is ${ calculateFactorial(x) }`);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> or <code>src/App.rs</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
