import React, {createContext, FC, useContext, useMemo, useReducer} from 'react';
import {
  UPDATE_APP_NAVIGATION,
  UPDATE_AUTHENTICATION_NAVIGATION,
  UPDATE_ROOT_NAVIGATION,
} from '../../constants';
import {initialState, reducer} from './state';
import {NavigationProviderProps, NavigationContextProps} from './types';

const NavigationContext = createContext<NavigationProviderProps>({
  state: initialState,
  actions: {
    updateRoot: () => {},
    updateApp: () => {},
    updateAuth: () => {},
  },
});

export const useNavigationContext = () => useContext(NavigationContext);

export const NavigationProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = useMemo<NavigationContextProps>(
    () => ({
      updateRoot: (view: number) => {
        dispatch({type: UPDATE_ROOT_NAVIGATION, payload: view});
      },
      updateAuth: (view: number) => {
        dispatch({type: UPDATE_AUTHENTICATION_NAVIGATION, payload: view});
      },
      updateApp: (view: number) => {
        dispatch({type: UPDATE_APP_NAVIGATION, payload: view});
      },
    }),
    [],
  );

  return (
    <NavigationContext.Provider
      value={{
        state: state,
        actions: actions,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};
