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
}));
