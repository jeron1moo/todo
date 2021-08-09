import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    width: '100%',
  },
  formLabel: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
  },
  formSelect: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    '& .MuiOutlinedInput-notchedOutline': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
  },
}));
