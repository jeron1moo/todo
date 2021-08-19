import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    alignSelf: 'flex-end',
    width: '125px',
    height: 'auto',
  },
  formLabel: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  formSelect: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '& .MuiOutlinedInput-notchedOutline': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
  },
}));
