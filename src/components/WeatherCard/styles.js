import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  weatherCard: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(3),
    margin: '0 auto',
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  weatherTitle: {
    display: 'flex',
    flexDirection: 'row',
  },

  weatherTemperature: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDescription: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  weatherAcutal: {
    fontSize: theme.spacing(18),
    lineHeight: '128px',
    fontWeight: '200',
  },
  weatherName: {
    fontSize: theme.spacing(3),
    fontWeight: '200',
  },
  weatherCountry: {
    fontSize: theme.spacing(4),
  },
  cardMain: {
    padding: theme.spacing(2),
  },
  weatherDescirption: {
    color: theme.palette.primary.light,
    fontSize: theme.spacing(3),
  },
  cardAdditional: {
    padding: theme.spacing(2),
  },
  weatherSummary: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  highLow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  high: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  low: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
