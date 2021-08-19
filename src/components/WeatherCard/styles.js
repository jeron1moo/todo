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
    height: 'auto',
    justifyContent: 'center',
    padding: theme.spacing(3),
  },
  weatherTitle: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardName: {
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(5),
    },
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
    justifyContent: 'space-around',
    width: '100%',
  },
  weatherIcon: {
    width: theme.spacing(18),
    [theme.breakpoints.up('md')]: {
      width: theme.spacing(22),
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.spacing(25),
    },
  },
  weatherAcutal: {
    fontSize: theme.spacing(14),
    lineHeight: '128px',
    fontWeight: '200',
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(22),
      lineHeight: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(25),
      lineHeight: '180px',
    },
  },
  weatherName: {
    fontWeight: '200',
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(5),
    },
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
    justifyContent: 'center',
    width: '100%',
  },
  high: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  low: {
    marginLeft: theme.spacing(4),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherFeels: {
    fontSize: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(4),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.spacing(5),
    },
  },
  weatherWind: {
    textAlign: 'center',
  },
  weatherHumidiy: {
    textAlign: 'center',
  },
}));
