import {Error} from '../../utils/errors';

export type ErrorState = {
  general_error: Error | undefined;
  auth_error: Error | undefined;
};

export type ErrorContextProps = {
  setGeneralError: (error: Error) => void;
  setAuthError: (error: Error) => void;
  clearError: () => void;
};

export type ErrorProviderProps = {
  state: ErrorState;
  actions: ErrorContextProps;
};
