import React, {createContext, FC, useContext, useMemo, useReducer} from 'react';
import {CLEAR_ERRORS, SET_AUTH_ERROR, SET_GENERAL_ERROR} from '../../constants';
import {Error} from '../../utils/errors';
import {debounce} from '../../utils/utils';
import {initialState, reducer} from './state';
import {ErrorProviderProps, ErrorContextProps} from './types';

const ErrorContext = createContext<ErrorProviderProps>({
  state: initialState,
  actions: {
    setAuthError: () => {},
    setGeneralError: () => {},
    clearError: () => {},
  },
});

export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo<ErrorContextProps>(
    () => ({
      setAuthError: (error: Error | undefined) => {
        dispatch({type: SET_AUTH_ERROR, payload: error});
      },
      setGeneralError: (error: Error | undefined) => {
        dispatch({type: SET_GENERAL_ERROR, payload: error});
      },
      clearError: () => {
        debounce(() => {
          dispatch({type: CLEAR_ERRORS, payload: undefined});
        })();
      },
    }),
    [],
  );

  return (
    <ErrorContext.Provider
      value={{
        state: state,
        actions: actions,
      }}>
      {children}
    </ErrorContext.Provider>
  );
};
