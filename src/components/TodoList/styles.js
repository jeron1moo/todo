import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  listTodos: {
    overflowY: 'auto',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  emptyTodos: {
    textTransform: 'uppercase',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingTodos: {
    textTransform: 'uppercase',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
