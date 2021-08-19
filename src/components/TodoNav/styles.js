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
    gap: theme.spacing(1),
  },
  themeButton: {
    color: theme.palette.secondary.main,
  },
  navActions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterSort: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(3),
  },
}));
