import React, {FC, useEffect, useState} from 'react';
import {GradientButton} from '../../components/buttons';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';
import {EmailField, PasswordField} from '../../components/inputs';
import {SubTitle} from '../../components/texts';
import {Loading, Toast} from '../../components/ui';
import {AUTH_NAV_VIEW, MEMBER_TYPE} from '../../constants';
import {
  useAuthenticationContext,
  useErrorContext,
  useNavigationContext,
  useUIContext,
} from '../../hooks';
import {strings} from '../../locale';
import {AuthenticationModel} from '../../models';

export const SignInScreen: FC = () => {
  const [emailCode, setEmailCode] = useState<string>('0000');
  const [passwordCode, setPasswordCode] = useState<string>('0000');
  const [auth] = useState(new AuthenticationModel());
  const [toast, setToast] = useState<{
    error: boolean;
    message: string | undefined;
  }>({error: false, message: undefined});
  const {
    actions: {signIn},
  } = useAuthenticationContext();
  const {
    actions: {updateAuth},
  } = useNavigationContext();
  const {
    state: {signInLoader},
  } = useUIContext();
  const {
    state: {auth_error},
    actions: {clearError},
  } = useErrorContext();

  useEffect(() => {
    if (auth_error !== undefined) {
      setToast({error: true, message: auth_error.message});
    }

    clearError();
  }, [auth_error]);

  const onEmail = (email: string) => {
    auth.email = email;
  };

  const onPassword = (password: string) => {
    auth.password = password;
  };

  const onSignIn = () => {
    try {
      auth.validateSignIn();
      signIn({
        email: auth.email,
        password: auth.password,
        member_type: MEMBER_TYPE.USER,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((code: string) => {
          if (code === '0003') {
            setEmailCode(code);
          }

          if (code === '0004') {
            setPasswordCode(code);
          }
        });
      } else {
        const toastSignIn = {error: true, message: error.message};
        setToast(toastSignIn);
      }
    }
  };

  const goToSignUp = () => {
    updateAuth(AUTH_NAV_VIEW.SIGN_UP);
  };

  const goToForgetPassword = () => {
    updateAuth(AUTH_NAV_VIEW.FORGET_PASSWORD);
  };

  return (
    <Screen>
      <ScrollContainer>
        <AppLogo />
        <EmailField onValue={onEmail} code={emailCode} />
        <PasswordField onValue={onPassword} code={passwordCode} />

        <GradientButton text={strings('button.sign_in')} onPress={onSignIn} />

        <SubTitle
          text={strings('button.join_us')}
          onClick={goToSignUp}
          center
          bold
        />

        <SubTitle
          text={strings('button.forget_password')}
          onClick={goToForgetPassword}
        />
      </ScrollContainer>

      <Toast toast={toast} />
      <Loading show={signInLoader} />
    </Screen>
  );
};
