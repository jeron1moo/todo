import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  todoContainer: {
    margin: '0 auto',
    width: '600px',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    justifyContent: 'center',
  },
  todoItem: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
  },
}));
