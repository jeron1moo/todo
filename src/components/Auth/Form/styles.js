import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  form: {
    width: '100%',
    margin: theme.spacing(3, 0, 0, 0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formItem: {
    margin: theme.spacing(1, 0, 0, 0),
  },
  container: {
    paddingTop: theme.spacing(15),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
