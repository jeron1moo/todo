import { useDispatch } from 'react-redux';
import applyTheme from '../redux/actions/theme';

export default () => {
  const dispatch = useDispatch();

  const onApplyTheme = () => dispatch(applyTheme());

  return {
    onApplyTheme,
  };
};
