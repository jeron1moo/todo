import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  listItem: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: '3px',
    color: theme.palette.secondary.main,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(1),
    '& .MuiSvgIcon-root *': {
      color: theme.palette.secondary.main,
    },
  },
  todoTitle: {
    textOverflow: 'ellipsis',
  },
  todoDescription: {
    textOverflow: 'ellipsis',
  },
  todoBody: {
    flex: 10,
  },
  todoArchive: {
    flex: 1,
  },
  todoPin: {
    flex: 1,
  },
  todoDivider: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
