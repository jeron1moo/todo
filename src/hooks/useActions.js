import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todos from '../redux/actions/todo';
import * as filters from '../redux/actions/filters';
import * as auth from '../redux/actions/auth';
import * as socket from '../redux/actions/socket';

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        { ...todos, ...filters, ...auth, ...socket },
        dispatch,
      ),
    [dispatch],
  );
};

export default { useActions };
