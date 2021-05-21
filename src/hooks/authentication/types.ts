import {
  Authentication,
  SignUp,
  Token,
  UpdatePassword,
  Verification,
} from '../../models/authentication/types';

export type AuthenticationContextProps = {
  signIn: (authentication: Authentication) => void;
  signUp: (authentication: SignUp) => void;
  verifyCode: (authentication: Verification) => void;
  signOut: () => void;
  forgetPassword: (verify: Verification) => void;
  sendVerifyCode: (verify: Verification) => void;
  reSendVerifyCode: (verify: Verification) => void;
  updatePassword: (password: UpdatePassword) => void;
  refreshToken: () => void;
};

export type AuthenticationProviderProps = {
  actions: AuthenticationContextProps;
};

export type AuthenticationState = {};
