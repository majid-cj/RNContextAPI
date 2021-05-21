export type RootParamsList = {
  SPLASH: undefined;
  APP: undefined;
};

export type AppParamsList = {
  AUTH: undefined;
  HOME: undefined;
};

export type AuthParamsList = {
  SIGN_IN: undefined;
  SIGN_UP: undefined;
  OTP: undefined;
  FORGET_PASSWORD: undefined;
  RENEW_PASSWORD: {email: string};
};

export type HomeParamsList = {
  HOME: undefined;
};
