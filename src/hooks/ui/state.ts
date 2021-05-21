import {
  Action,
  SET_SIGN_IN_LOADER,
  SET_SIGN_UP_LOADER,
  SET_VERIFY_CODE_LOADER,
  SET_SEND_VERIFY_CODE_LOADER,
  SET_RE_SEND_VERIFY_CODE_LOADER,
  SET_FORGET_PASSWORD_LOADER,
  SET_PASSWORD_LOADER,
} from '../../constants';
import {UIState} from './types';

export const initialState: UIState = {
  signInLoader: false,
  signUpLoader: false,
  verifyCodeLoader: false,
  sendVerifyCodeLoader: false,
  reSendVerifyCodeLoader: false,
  forgetPasswordLoader: false,
  changePasswordLoader: false,
};

export const reducer = (state = initialState, action: Action): UIState => {
  switch (action.type) {
    case SET_SIGN_IN_LOADER:
      return {...state, signInLoader: action.payload};

    case SET_SIGN_UP_LOADER:
      return {...state, signUpLoader: action.payload};

    case SET_VERIFY_CODE_LOADER:
      return {...state, verifyCodeLoader: action.payload};

    case SET_SEND_VERIFY_CODE_LOADER:
      return {...state, sendVerifyCodeLoader: action.payload};

    case SET_RE_SEND_VERIFY_CODE_LOADER:
      return {...state, reSendVerifyCodeLoader: action.payload};

    case SET_FORGET_PASSWORD_LOADER:
      return {...state, forgetPasswordLoader: action.payload};

    case SET_PASSWORD_LOADER:
      return {...state, changePasswordLoader: action.payload};

    default:
      return state;
  }
};
