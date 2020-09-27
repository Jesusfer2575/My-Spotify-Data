import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useUserPreferencesContext from '../../store/userPreferences/useUserPreferenceContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Spotify-Me
          </Typography>
          <FormControlLabel control={<Switch checked={isSwitchOn} onChange={handleChange} />} label="Dark mode" />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
