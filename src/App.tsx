import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InputForm } from './input_form';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function sayHello() {
  alert('You clicked me!');
}

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <InputForm/>
        <button onClick={sayHello}>Alert</button>
        <a
          className="App-link"
          href="https://github.com/jakubchod/test-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show repo
        </a>
      </header>
    </div>
  );
}

export default App;
