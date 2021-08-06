import { APPLY_THEME } from '../constants/theme';
import theme from '../../styles/lightTheme';
import themeDark from '../../styles/darkTheme';

const initialState = {
  ...theme,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_THEME:
      return state.palette.type === 'light' ? themeDark : theme;
    default:
      return state;
  }
};
