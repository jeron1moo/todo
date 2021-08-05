import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#556cd6',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#cc4444',
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
});
