import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sentiment from './sentiment';
import App from './App';
import Playlist from './components/Playlist';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/playlist" component = {Playlist} />
    </Router>
    <App />
    <Sentiment />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
