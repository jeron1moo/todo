import { APPLY_THEME } from '../constants/Theme';
import { lightTheme } from '../styles/theme';

const initialState = {
  theme: lightTheme,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_THEME:
      return { theme: action.payload };
    default:
      return state;
  }
};
