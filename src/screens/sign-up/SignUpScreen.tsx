import React, {FC, useEffect, useState} from 'react';
import {GradientButton} from '../../components/buttons';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';
import {
  DisplayNameField,
  EmailField,
  PasswordField,
} from '../../components/inputs';
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
import {SignUpModel} from '../../models';

export const SignUpScreen: FC = () => {
  const [displayNameCode, setDisplayNameCode] = useState<string>('0000');
  const [emailCode, setEmailCode] = useState<string>('0000');
  const [passwordCode, setPasswordCode] = useState<string>('0000');
  const [auth] = useState(new SignUpModel());
  const [toast, setToast] = useState<{
    error: boolean;
    message: string | undefined;
  }>({error: false, message: undefined});
  const {
    actions: {signUp},
  } = useAuthenticationContext();
  const {
    actions: {updateAuth},
  } = useNavigationContext();
  const {
    state: {signUpLoader},
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

  const onDisplayName = (display_name: string) => {
    auth.display_name = display_name;
  };

  const onEmail = (email: string) => {
    auth.email = email;
  };

  const onPassword = (password: string) => {
    auth.password = password;
  };

  const onSignUp = () => {
    try {
      auth.validateSignUp();
      signUp({
        display_name: auth.display_name,
        email: auth.email,
        password: auth.password,
        member_type: MEMBER_TYPE.USER,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((code: string) => {
          if (code === '0002') {
            setDisplayNameCode(code);
          }

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

  const goToSignIn = () => {
    updateAuth(AUTH_NAV_VIEW.SIGN_IN);
  };

  return (
    <Screen>
      <ScrollContainer>
        <AppLogo />
        <DisplayNameField onValue={onDisplayName} code={displayNameCode} />
        <EmailField onValue={onEmail} code={emailCode} />
        <PasswordField onValue={onPassword} code={passwordCode} />

        <GradientButton text={strings('button.join')} onPress={onSignUp} />

        <SubTitle
          text={strings('button.return_to_sign_in')}
          onClick={goToSignIn}
          center
          bold
        />
      </ScrollContainer>
      <Toast toast={toast} />
      <Loading show={signUpLoader} />
    </Screen>
  );
};
