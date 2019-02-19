import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { loadWasm } from './wasmLoader';

const App = () => {
  useEffect(() => {
    document.title = 'rust with react';
  });

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
        <FactorialText />
        <div>
          Rendered with React.js{' '}
          <span role="img" aria-label="atom">
            ⚛️
          </span>
          <br />
          Computed lovingly with Rust{' '}
          <span role="img" aria-label="crab">
            🦀
          </span>
          <br />
          <a
            className="App-link"
            href="https://github.com/Terkwood/baby-rust-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Terkwood/baby-rust-react
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
