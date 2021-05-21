import {
  AUTH_NAV_VIEW,
  ROOT_NAV_VIEW,
  APP_NAV_VIEW,
  Action,
  UPDATE_ROOT_NAVIGATION,
  UPDATE_APP_NAVIGATION,
  UPDATE_AUTHENTICATION_NAVIGATION,
} from '../../constants';
import {NavigationState} from './types';

export const initialState: NavigationState = {
  root: ROOT_NAV_VIEW.SPLASH,
  auth: AUTH_NAV_VIEW.SIGN_IN,
  app: APP_NAV_VIEW.REGISTRATION,
};

export const reducer = (
  state = initialState,
  action: Action,
): NavigationState => {
  switch (action.type) {
    case UPDATE_ROOT_NAVIGATION:
      return {...state, root: action.payload};

    case UPDATE_APP_NAVIGATION:
      return {...state, app: action.payload};

    case UPDATE_AUTHENTICATION_NAVIGATION:
      return {...state, auth: action.payload};

    default:
      return state;
  }
};
