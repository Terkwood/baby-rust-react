import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { loadWasm } from './wasmLoader';

const App = () => {
  const [result, setResult] = useState(null);
  const x = 31;
  loadWasm(wasm => {
    const calculateFactorial = wasm.instance.exports.fact;

    setResult(calculateFactorial(x));
  });

  const FactorialText = () => (
    <p>{result ? `The factorial of ${x} is ${result}` : ''}</p>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FactorialText />
        </a>
      </header>
    </div>
  );
};

export default App;
