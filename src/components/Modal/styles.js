import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
  },
  modalContent: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 4, 3),
  },
  modalDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  themeButton: {
    color: theme.palette.secondary.main,
  },
  modalClose: {
    color: theme.palette.secondary.main,
  },
  modalButton: {
    marginRight: '-20px',
  },
  modalTitle: {
    display: 'inline',
  },
}));
