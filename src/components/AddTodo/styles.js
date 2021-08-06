import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  addTodo: {
    '& .MuiTextField-root *': {
      color: theme.palette.secondary.main,
    },
    height: '100% ',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  themeButton: {
    color: theme.palette.secondary.main,
  },
  addInput: {
    color: theme.palette.primary.main,
    '&:nth-child(2)': {
      marginBottom: '20px',
    },
  },
}));
