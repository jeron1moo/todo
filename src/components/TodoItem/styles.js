import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  listItem: {
    color: theme.palette.primary.main,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  todoTitle: {
    textOverflow: 'ellipsis',
  },
  todoDescription: { textOverflow: 'ellipsis' },
  todoBody: {
    flex: 2,
  },
  todoArchive: {
    flex: 1,
  },
  todoPin: {
    flex: 1,
  },
}));
