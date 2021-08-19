import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '6px',
    },
    '*::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '20px',
      backgroundClip: 'content-box',
      border: '1px solid transparent',
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  todoContainer: {
    margin: '0 auto',
    width: '600px',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  todoItem: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: 1,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
}));
