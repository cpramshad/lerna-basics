import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@cpramshad/components';

function App() {
  console.log(Button);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        count is {count}
        <Button onClick={() => {
          setCount(prev => ++prev)
        }} />
      </header>
    </div>
  );
}

export default App;
