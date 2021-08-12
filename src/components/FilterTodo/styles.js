import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  filterTodo: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
    },
    '& .Mui-selected .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiButtonBase-root': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiToggleButton-label': {
      color: theme.palette.secondary.main,
    },
    '& .Mui-selected .MuiToggleButton-label': {
      color: theme.palette.primary.main,
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
