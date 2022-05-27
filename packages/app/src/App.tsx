import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        count is {count}
        <button onClick={() => {
          setCount(prev => ++prev)
        }}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
