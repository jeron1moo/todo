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
      light: 'rgb(255, 197, 112)',
      dark: 'rgb(200, 147, 89)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  background: {
    default: '#fafafa',
    paper: '#fff',
  },
});
