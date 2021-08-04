import { createTheme } from '@material-ui/core/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#cc4444',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26292C',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFB74D',
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});
