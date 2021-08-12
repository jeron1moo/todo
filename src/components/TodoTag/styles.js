import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    width: '100%',
    '& .MuiSvgIcon-root': {
      fill: theme.palette.secondary.main,
    },
  },
  formLabel: {
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    paddingLeft: theme.spacing(2),
  },
  formSelect: {
    backgroundColor: 'transparent',
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
