import React, {createContext, FC, useContext, useMemo, useReducer} from 'react';
import {
  SET_FORGET_PASSWORD_LOADER,
  SET_VERIFY_CODE_LOADER,
  SET_PASSWORD_LOADER,
  SET_RE_SEND_VERIFY_CODE_LOADER,
  SET_SEND_VERIFY_CODE_LOADER,
  SET_SIGN_IN_LOADER,
  SET_SIGN_UP_LOADER,
} from '../../constants';
import {initialState, reducer} from './state';
import {UIContextProps, UIProviderProps} from './types';

const UIContext = createContext<UIProviderProps>({
  state: initialState,
  actions: {
    viewSignInLoader: () => {},
    viewSignUpLoader: () => {},
    viewVerifyCodeLoader: () => {},
    viewSendVerifyCode: () => {},
    viewReSendVerifyCode: () => {},
    viewForgetPassword: () => {},
    viewChangePasswordLoader: () => {},
  },
});

export const useUIContext = () => useContext(UIContext);

export const UIProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useMemo<UIContextProps>(
    () => ({
      viewSignInLoader: (show: boolean) => {
        dispatch({type: SET_SIGN_IN_LOADER, payload: show});
      },
      viewSignUpLoader: (show: boolean) => {
        dispatch({type: SET_SIGN_UP_LOADER, payload: show});
      },
      viewVerifyCodeLoader: (show: boolean) => {
        dispatch({type: SET_VERIFY_CODE_LOADER, payload: show});
      },
      viewSendVerifyCode: (show: boolean) => {
        dispatch({type: SET_SEND_VERIFY_CODE_LOADER, payload: show});
      },
      viewReSendVerifyCode: (show: boolean) => {
        dispatch({type: SET_RE_SEND_VERIFY_CODE_LOADER, payload: show});
      },
      viewForgetPassword: (show: boolean) => {
        dispatch({type: SET_FORGET_PASSWORD_LOADER, payload: show});
      },
      viewChangePasswordLoader: (show: boolean) => {
        dispatch({type: SET_PASSWORD_LOADER, payload: show});
      },
    }),
    [],
  );

  return (
    <UIContext.Provider
      value={{
        state: state,
        actions: actions,
      }}>
      {children}
    </UIContext.Provider>
  );
};
