import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todos from '../redux/actions/todo';

const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(todos, dispatch), [dispatch]);
};

export default useActions;
