import React from 'react';
import './App.css';
import Homepage from './components/Homepage.js';

import './styles/style.css';


function App() {
  return (
      <div className='App'>
          <a href='http://localhost:8888'> Login to Spotify </a>
          <Homepage colour = "blue"/>
        </div>
      );
    }

export default App;
