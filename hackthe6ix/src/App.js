import React from 'react';
import './App.css';


function App() {
  const styleObj = {
    fontSize: 40
  }
  const styleForm = {
    height: 50,
    width: 500
  }
  return (
    
    <div className='App'>
      <a href='http://localhost:8888'> Login to Spotify </a>
      <div>
        <h style={styleObj}>Emotion Detecting Shit</h>
        <form>
         <input placeholder="Type ur problems" style={styleForm}></input><br></br>
         <input type="submit"></input>
        </form>
        
      </div>
      
    </div>
  );
}

export default App;
