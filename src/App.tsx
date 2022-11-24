import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const dadJokes = () => {
    fetch('/api/dadjokes')
      .then(response => console.log(response))
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button className='App-link' onClick={() => dadJokes()}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
