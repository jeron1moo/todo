import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  todoNav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: theme.spacing(2, 4, 3),
    '& .Mui-checked': {
      color: theme.palette.secondary.main,
    },
  },
  themeButton: {
    color: theme.palette.secondary.main,
  },
}));
