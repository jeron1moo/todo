import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    backgroundColor: theme.palette.primary.dark,
    '& *': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    width: '100%',
  },
}));
