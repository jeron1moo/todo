import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  editTodo: {
    height: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    width: '500px',
    '& .MuiInputBase-input': {
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
  actionButton: {
    color: theme.palette.secondary.main,
    background: theme.palette.background.default,
    '&:nth-child(1)': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      background: theme.palette.primary.dark,
    },
    '&:nth-child(2)': {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover .MuiButton-label': {
      color: theme.palette.primary.main,
    },
  },
  editInput: {
    color: theme.palette.primary.main,
    '&:nth-child(2)': {
      marginBottom: theme.spacing(2),
    },
  },
  editAcitons: {
    display: 'flex',
    flexDirection: 'row',
  },
  editTag: {
    maxWidth: '150px',
    width: '150px',
    marginBottom: theme.spacing(2),
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    '& span': {
      paddingRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-notchedOutline': {
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    '&:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        color: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
  },
}));
