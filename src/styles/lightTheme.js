import { createTheme } from '@material-ui/core/styles';

export default createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#556cd6',
      light: 'rgb(81, 91, 95)',
      dark: '#1a237e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#7081CE',
      dark: '#92A0E4',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#8290CE',
      paper: '#fff',
    },
    error: {
      main: '#e57373',
      light: '#f6a5c0',
    },
  },
});
