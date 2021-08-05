import { APPLY_THEME } from '../constants/theme';
import theme from '../../styles/lightTheme';

const initialState = {
  ...theme,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_THEME:
      return action.payload;
    default:
      return state;
  }
};
