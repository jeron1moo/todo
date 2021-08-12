import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  detailsPage: {
    margin: '0 auto',
    width: '80%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: '30px',
    padding: theme.spacing(6),
    gap: theme.spacing(3),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.primary.main,
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
  datailsTitle: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
    maxWidth: '300px',
    width: '300px',
    minWidth: '100px',
    alignSelf: 'flex-end',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
  detailsTag: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    maxWidth: '300px',
    width: '300px',
    alignSelf: 'flex-end',
    '& span': {
      marginRight: theme.spacing(2),
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        borderColor: theme.palette.background.default,
      },
  },
  detailsDescription: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    width: '100%',
    minHeight: 'auto',
  },
  detailsIconClose: {
    color: theme.palette.secondary.main,
  },
  detailsButtonClose: {
    position: 'absolute',
    right: '4px',
    top: '4px',
  },
  loadingTodos: {
    textTransform: 'uppercase',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: theme.palette.secondary.main,
    fontSize: '32px',
    fontWeight: '900',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(5),
  },
  detailsTitle: {
    maxWidth: '300px',
    width: '300px',
  },
  detailsDate: {
    maxWidth: '300px',
    width: '300px',
  },
  buttonError: {
    backgroundColor: '#f44336',
  },
}));
