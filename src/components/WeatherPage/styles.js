import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  weatherPage: {
    color: theme.palette.secondary.main,
    width: 'auto',
    height: '100vh',
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    paddingTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    '& .MuiInputBase-input': {
      color: theme.palette.secondary.main,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      color: theme.palette.primary.main,
      borderColor: theme.palette.secondary.main,
      borderRadius: '20px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
      },
  },
  pageDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: theme.spacing(4),
  },
  weatherSearch: {
    borderRadius: '20px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
}));
