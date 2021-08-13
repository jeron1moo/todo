import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  weatherPage: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
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
    width: '100%',
    borderRadius: '20px',
  },
}));
