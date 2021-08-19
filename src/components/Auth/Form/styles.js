import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: theme.palette.primary.main,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4, 6),
    maxWidth: '600px',
    width: '600px',
    '& .MuiInputBase-root': {
      color: theme.palette.secondary.main,
    },
    '& .MuiTextField-root': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      '& .MuiFormLabel-root': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        color: theme.palette.primary.main,
        borderColor: theme.palette.secondary.main,
      },
      '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
        {
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
        },
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  formItem: {},
  container: {
    paddingTop: theme.spacing(15),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '100%',
    color: theme.palette.secondary.main,
  },
  remember: {
    alignSelf: 'flex-start',
  },
  haveAccount: {
    display: 'flex',
    flexDirection: 'row',
    color: theme.palette.primary.light,
    alignItems: 'center',
  },
  redirect: {
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.secondary.main,
    },
  },
  submit: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
}));
