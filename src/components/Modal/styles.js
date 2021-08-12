import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
  },
  modalContent: {
    position: 'relative',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4, 4, 3),
  },
  modalDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalClose: {
    color: theme.palette.secondary.main,
  },
  modalButton: {
    position: 'absolute',
    right: '4px',
    top: '4px',
  },
  modalTitle: {
    display: 'inline',
  },
  button: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.secondary.main,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    width: '90px',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover  .MuiSvgIcon-root': {
      fill: theme.palette.primary.main,
    },
  },
}));
