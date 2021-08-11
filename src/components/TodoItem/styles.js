import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  listItem: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(1),
    '& .MuiSvgIcon-root *': {
      color: theme.palette.secondary.main,
    },
  },
  todoTitle: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  todoDescription: {
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  todoBody: {
    width: 0,
    flex: 5,
  },
  todoArchive: {
    flex: 1,
    padding: theme.spacing(0),
    maxWidth: '30px',
  },
  todoTag: {
    maxWidth: '200px',
    minWidth: '150px',
    paddingLeft: '12px',
    marginRight: '12px',
    flex: 1,
  },
  todoPin: {
    flex: 1,
    maxWidth: '30px',
  },
  todoDivider: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
