import React, { Component } from "react";
import './App.css';
import Homepage from './components/Homepage.js';
import './styles/style.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();
var tempSentimemt = localStorage.getItem("vTwoLocalStorage");

class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: {
        name: 'unknown',
        image: '',
        features: '',
        valence: 0,
        energy: 0
      }
    }
  }
  
  getHashParams = () => {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0].url,
          }
        })

        spotifyApi.getAudioFeaturesForTrack(response.item.id)
      })
  }



  render() {
    return (
        <div className='App'>
          <Homepage colour = "blue"/>
          
          <div> Now playing {this.state.nowPlaying.name} </div>
          <img src={this.state.nowPlaying.image} />
          <button onClick={this.getNowPlaying}>
            Check now playing!!
          </button>
        </div>
        );
    }
  }

export default App;
