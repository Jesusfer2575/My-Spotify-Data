import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4167B2',
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000',
    },
  },
});
