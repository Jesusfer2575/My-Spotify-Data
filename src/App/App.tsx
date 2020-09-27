import React from 'react';
import SpotifyLogo from '../assets/spotify.png';
import Lists from '../components/lists/Lists';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useUserPreferenceContext from '../store/userPreferences/useUserPreferenceContext';
import { darkTheme, lightTheme } from '../themes/themes';
import ImageContainer from './App.styles';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Layout>
        <ImageContainer src={SpotifyLogo} className="Spotify-logo" alt="logo" />
        <div>
          <Lists />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
