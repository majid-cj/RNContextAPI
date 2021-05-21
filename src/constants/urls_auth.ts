import {I18nManager} from 'react-native';

const lang = I18nManager.isRTL ? 'ar' : 'en';

export const ROOT = `http://192.168.8.119:8080/${lang}/`;

export const TIME_OUT = 5000;

export const ROOT_URL = `${ROOT}api/v1/user/`;

// AUTHENTICATION URLS
export const SIGN_UP_URL = `${ROOT_URL}sign-up`;

export const SIGN_IN_URL = `${ROOT_URL}sign-in`;

export const SIGN_OUT_URL = `${ROOT_URL}logout`;

export const SOCIAL_SIGN_IN_URL = `${ROOT_URL}social/sign-in`;

export const REFRESH_URL = `${ROOT_URL}refresh`;

export const RESET_CODE_URL = `${ROOT_URL}reset/code`;

export const RESET_PASSWORD_URL = `${ROOT_URL}reset/password`;

export const UPDATE_PASSWORD_URL = (member: string): string =>
  `${ROOT_URL}password/${member}`;

export const VERIFY_CODE_URL = `${ROOT_URL}verify/check`;
