import axios, {AxiosRequestConfig} from 'axios';
import {
  REFRESH_URL,
  RESET_CODE_URL,
  RESET_PASSWORD_URL,
  SIGN_IN_URL,
  SIGN_OUT_URL,
  SIGN_UP_URL,
  TIME_OUT,
  VERIFY_CODE_URL,
} from '../../../constants';
import {
  Authentication,
  SignUp,
  Token,
  Verification,
} from '../../../models/authentication/types';
import {GeneralError} from '../../../utils/errors';
import {
  AuthenticationResponse,
  RefreshTokenResponse,
  VerificationResponse,
} from './types';

export const signUpAPI = async (
  requestData: SignUp,
  config: AxiosRequestConfig = {},
): Promise<AuthenticationResponse> => {
  try {
    const response = await axios.post<AuthenticationResponse>(
      SIGN_UP_URL,
      requestData,
      config,
    );
    const {data} = response;
    return data;
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const signInAPI = async (
  requestData: Authentication,
  config: AxiosRequestConfig = {},
): Promise<AuthenticationResponse> => {
  try {
    const response = await axios.post<AuthenticationResponse>(
      SIGN_IN_URL,
      requestData,
      {...config, timeout: TIME_OUT},
    );
    const {data} = response;
    return data;
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const signOutAPI = async (config: AxiosRequestConfig = {}) => {
  try {
    await axios.post(SIGN_OUT_URL, {}, {...config, timeout: TIME_OUT});
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const verifyCodeAPI = async (
  requestData: Verification,
  config: AxiosRequestConfig = {},
): Promise<VerificationResponse> => {
  try {
    const response = await axios.post<VerificationResponse>(
      VERIFY_CODE_URL,
      requestData,
      {...config, timeout: TIME_OUT},
    );
    const {data} = response;
    return data;
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const resetVerificationCodeAPI = async (
  requestData: Verification,
  config: AxiosRequestConfig = {},
) => {
  try {
    await axios.post<VerificationResponse>(RESET_CODE_URL, requestData, {
      ...config,
      timeout: TIME_OUT,
    });
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const resetPasswordAPI = async (
  requestData: Verification,
  config: AxiosRequestConfig = {},
) => {
  try {
    await axios.post(RESET_PASSWORD_URL, requestData, {
      ...config,
      timeout: TIME_OUT,
    });
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};

export const refreshTokenAPI = async (
  requestData: Token,
  config: AxiosRequestConfig = {},
): Promise<RefreshTokenResponse> => {
  try {
    const response = await axios.post(REFRESH_URL, requestData, {
      ...config,
      timeout: TIME_OUT,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const {data} = error.response;
      throw new GeneralError('0000', data);
    }
    throw new GeneralError();
  }
};
