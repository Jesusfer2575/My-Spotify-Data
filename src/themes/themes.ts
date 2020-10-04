import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#E0F7FA',
    },
    secondary: {
      main: '#FF1744',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#80DEEA',
    },
  },
});
