import React, { Component } from "react";
import './App.css';
import Homepage from './components/Homepage.js';
import './styles/style.css';


class App extends Component {
  render() {
    return (
        <div className='App'>
          <Homepage colour = "blue"/>
        </div>
        );
      }
  }

export default App;
