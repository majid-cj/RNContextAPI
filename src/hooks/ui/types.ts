export type UIState = {
  signInLoader: boolean;
  signUpLoader: boolean;
  verifyCodeLoader: boolean;
  sendVerifyCodeLoader: boolean;
  reSendVerifyCodeLoader: boolean;
  forgetPasswordLoader: boolean;
  changePasswordLoader: boolean;
};

export type UIContextProps = {
  viewSignInLoader: (show: boolean) => void;
  viewSignUpLoader: (show: boolean) => void;
  viewVerifyCodeLoader: (show: boolean) => void;
  viewSendVerifyCode: (show: boolean) => void;
  viewReSendVerifyCode: (show: boolean) => void;
  viewForgetPassword: (show: boolean) => void;
  viewChangePasswordLoader: (show: boolean) => void;
};

export type UIProviderProps = {
  state: UIState;
  actions: UIContextProps;
};
