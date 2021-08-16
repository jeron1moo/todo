import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    weight: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    color: theme.palette.secondary.main,
  },
}));
