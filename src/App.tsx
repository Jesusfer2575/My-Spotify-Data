import React from 'react';
import SpotifyLogo from './assets/spotify.png';
import './App.css';
import Lists from './components/lists/Lists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={SpotifyLogo} className="Spotify-logo" alt="logo" style={{height:250, width: 850}}/>
        <div>
          <Lists />
        </div>
      </header>
    </div>
  );
}

export default App;
