import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modalContent: {
    position: 'relative',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4, 4, 3),
  },
  input: {
    width: '100%',
    color: theme.palette.secondary.main,
  },
}));
