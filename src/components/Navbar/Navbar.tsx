import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useUserPreferencesContext from '../../store/userPreferences/useUserPreferenceContext';
import UserCard from '../user-card/UserCard';
import useStyles, { ImageContainer } from './Navbar.styles';
import SpotifyLogo from '../../assets/spotify.png';

const Navbar: React.FC = () => {
  const { theme, setInverseTheme } = useUserPreferencesContext();
  const [isSwitchOn, setIsSwitchOn] = useState(theme === 'dark' ? true : false);
  const classes = useStyles();

  const handleChange = () => {
    theme === 'light' ? setInverseTheme('dark') : setInverseTheme('light');
    const isOn = isSwitchOn;
    setIsSwitchOn(!isOn);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ImageContainer src={SpotifyLogo} className="Spotify-logo" alt="logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <FormControlLabel control={<Switch checked={isSwitchOn} onChange={handleChange} />} label="Dark mode" />
          <UserCard />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
