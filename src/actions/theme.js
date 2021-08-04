import { APPLY_THEME } from '../constants/Theme';

const applyTheme = (theme) => ({
  type: APPLY_THEME,
  payload: theme,
});

export default applyTheme;
