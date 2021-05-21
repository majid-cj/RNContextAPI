import {
  Action,
  CLEAR_ERRORS,
  SET_AUTH_ERROR,
  SET_GENERAL_ERROR,
} from '../../constants';
import {ErrorState} from './types';

export const initialState: ErrorState = {
  auth_error: undefined,
  general_error: undefined,
};

export const reducer = (state = initialState, action: Action): ErrorState => {
  const {type, payload} = action;
  if (type === CLEAR_ERRORS) {
    return initialState;
  }

  switch (type) {
    case SET_AUTH_ERROR:
      return {...state, auth_error: payload};

    case SET_GENERAL_ERROR:
      return {...state, general_error: payload};

    default:
      return state;
  }
};
