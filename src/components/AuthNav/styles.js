import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  authnav: {
    position: 'absolute',

    borderRadius: 0,
    right: 0,
    top: 0,
  },
  logout: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
  login: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.secondary.light,
    },
  },
  signup: {
    color: theme.palette.primary.main,
    borderRadius: 0,
    backgroundColor: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.primary.contrastText,
    },
  },
}));
