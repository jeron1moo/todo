import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  todoNav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(4, 2, 3),
    '& .Mui-checked': {
      color: theme.palette.secondary.main,
    },
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  themeButton: {
    color: theme.palette.secondary.main,
  },
}));
