import React, {createContext, FC, useContext, useMemo} from 'react';
import {APP_NAV_VIEW, AUTH_NAV_VIEW} from '../../constants';
import {
  Authentication,
  SignUp,
  Token,
  UpdatePassword,
  Verification,
} from '../../models/authentication/types';
import {Profile} from '../../models/profile/types';
import {
  refreshTokenAPI,
  resetPasswordAPI,
  resetVerificationCodeAPI,
  signInAPI,
  signOutAPI,
  signUpAPI,
  verifyCodeAPI,
} from '../../services/api';
import {
  deleteAuth,
  deleteProfile,
  deleteUser,
  getAuth,
  getUser,
  saveAuth,
  saveProfile,
  saveUser,
  saveVerify,
} from '../../services/storage';
import {useErrorContext} from '../errors';
import {useNavigationContext} from '../navigation';
import {useUIContext} from '../ui';
import {AuthenticationContextProps, AuthenticationProviderProps} from './types';

const AuthenticationContext = createContext<AuthenticationProviderProps>({
  actions: {
    signIn: () => {},
    signUp: () => {},
    verifyCode: () => {},
    signOut: () => {},
    forgetPassword: () => {},
    sendVerifyCode: () => {},
    reSendVerifyCode: () => {},
    updatePassword: () => {},
    refreshToken: () => {},
  },
});

export const useAuthenticationContext = () => useContext(AuthenticationContext);

export const AuthenticationProvider: FC = ({children}) => {
  const {
    actions: {updateApp, updateAuth},
  } = useNavigationContext();
  const {
    actions: {setAuthError, setGeneralError, clearError},
  } = useErrorContext();
  const {
    actions: {
      viewSignInLoader,
      viewSignUpLoader,
      viewVerifyCodeLoader,
      viewSendVerifyCode,
      viewForgetPassword,
      viewReSendVerifyCode,
      viewChangePasswordLoader,
    },
  } = useUIContext();

  const save = async (
    member: Authentication,
    token: Token,
    profile: Profile,
  ) => {
    await saveUser(member);
    await saveAuth(token);
    await saveProfile(profile);
  };

  const actions = useMemo<AuthenticationContextProps>(
    () => ({
      signIn: async (authentication: Authentication) => {
        try {
          viewSignInLoader(true);
          const response = await signInAPI(authentication);
          const {member, profile, token} = response.data;
          await save(member, token, profile);

          updateApp(member.verified ? APP_NAV_VIEW.HOME : AUTH_NAV_VIEW.OTP);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewSignInLoader(false);
        }
      },
      signUp: async (authentication: SignUp) => {
        try {
          viewSignUpLoader(true);
          const response = await signUpAPI(authentication);
          const {member, profile, token} = response.data;
          await save(member, token, profile);
          updateAuth(AUTH_NAV_VIEW.OTP);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewSignUpLoader(false);
        }
      },
      verifyCode: async (verification: Verification) => {
        try {
          viewVerifyCodeLoader(true);
          const token = await getAuth();
          const user = await getUser();
          await verifyCodeAPI(verification, {
            headers: {Authorization: `Bearer ${token.access}`},
          });

          await saveUser({...user, verified: true});
          updateAuth(AUTH_NAV_VIEW.SIGN_IN);
          updateApp(APP_NAV_VIEW.HOME);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewVerifyCodeLoader(false);
        }
      },
      sendVerifyCode: async (verify: Verification) => {
        try {
          viewSendVerifyCode(true);
          await saveVerify(verify);
          await resetVerificationCodeAPI(verify);
          updateAuth(AUTH_NAV_VIEW.RENEW_PASSWORD);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewSendVerifyCode(false);
        }
      },
      reSendVerifyCode: async (verify: Verification) => {
        try {
          viewReSendVerifyCode(true);
          await saveVerify(verify);
          await resetVerificationCodeAPI(verify);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewReSendVerifyCode(false);
        }
      },
      forgetPassword: async (verify: Verification) => {
        try {
          viewForgetPassword(true);
          await resetPasswordAPI(verify);
          updateAuth(AUTH_NAV_VIEW.SIGN_IN);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewForgetPassword(false);
        }
      },
      signOut: async () => {
        try {
          const token = await getAuth();
          await signOutAPI({
            headers: {Authorization: `Bearer ${token.access}`},
          });

          await deleteUser();
          await deleteAuth();
          await deleteProfile();
          updateApp(APP_NAV_VIEW.REGISTRATION);
          updateAuth(AUTH_NAV_VIEW.SIGN_IN);
        } catch (error) {
          setGeneralError(error);
        } finally {
          clearError();
        }
      },
      updatePassword: async (password: UpdatePassword) => {
        try {
          console.log(password);
        } catch (error) {
          setAuthError(error);
        } finally {
          viewChangePasswordLoader(false);
        }
      },
      refreshToken: async () => {
        try {
          const token = await getAuth();
          const {data} = await refreshTokenAPI({refresh: token.refresh});
          await saveAuth(data);
        } catch (error) {
          setGeneralError(error);
        }
      },
    }),
    [],
  );

  return (
    <AuthenticationContext.Provider value={{actions: actions}}>
      {children}
    </AuthenticationContext.Provider>
  );
};
