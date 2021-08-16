import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  filterField: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    width: '300px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'theme.palette.secondary.main',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
    '& .MuiAutocomplete-inputRoot .MuiSvgIcon-root': {
      color: theme.palette.secondary.main,
    },
    '& .MuiAutocomplete-inputRoot .MuiAutocomplete-tag .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiAutocomplete-inputRoot,  .MuiInputLabel-root ': {
      color: theme.palette.secondary.main,
      backgroundColor: 'transparent',
    },

    '& .MuiAutocomplete-tag': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
