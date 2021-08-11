import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todos from '../redux/actions/todo';
import * as filters from '../redux/actions/filters';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators({ ...todos, ...filters }, dispatch),
    [dispatch],
  );
};

export default { useActions };
