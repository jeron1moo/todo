import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  usersNav: {
    position: 'absolute',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 0,
    left: 0,
    top: 0,
    width: '100px',
    height: '100px',
  },
}));
