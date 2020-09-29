import React from 'react';
import Lists from '../components/lists/Lists';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useUserPreferenceContext from '../store/userPreferences/useUserPreferenceContext';
import { darkTheme, lightTheme } from '../themes/themes';
import Typography from '@material-ui/core/Typography';

function App() {
  const { theme } = useUserPreferenceContext();
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Layout>
        {/* <ImageContainer src={SpotifyLogo} className="Spotify-logo" alt="logo" /> */}
        <Typography variant="h5" gutterBottom>
          Top artists on my Spotify
        </Typography>
        <Lists />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
