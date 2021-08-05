import { APPLY_THEME } from '../constants/theme';

const applyTheme = (theme) => ({
  type: APPLY_THEME,
  payload: theme,
});

export default applyTheme;
