import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  todoContainer: {
    margin: '0 auto',
    width: '600px',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '150px 1fr',
    justifyContent: 'center',
  },
  todoItem: {
    bgcolor: 'primary.main',
    color: 'white',
    borderRadius: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
  },
}));
