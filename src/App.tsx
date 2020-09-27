import React from 'react';
import SpotifyLogo from './assets/spotify.png';
import Lists from './components/lists/Lists';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import useUserPreferenceContext from './store/userPreferences/useUserPreferenceContext';
import { darkTheme, lightTheme } from './themes/themes';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <header>
        <Navbar />
      </header>
      <div>
        <img src={SpotifyLogo} className="Spotify-logo" alt="logo" style={{ height: 250, width: 850 }} />
        <div>
          <Lists />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
