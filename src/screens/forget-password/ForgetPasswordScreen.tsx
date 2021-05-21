import React, {FC, useEffect, useState} from 'react';
import {GradientButton} from '../../components/buttons';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';
import {EmailField} from '../../components/inputs';
import {SubTitle} from '../../components/texts';
import {Loading, Toast} from '../../components/ui';
import {AUTH_NAV_VIEW, VERIFICATION_CODE} from '../../constants';
import {
  useAuthenticationContext,
  useErrorContext,
  useNavigationContext,
  useUIContext,
} from '../../hooks';
import {strings} from '../../locale';
import {VerificationModel} from '../../models';

export const ForgetPasswordScreen: FC = () => {
  const [emailCode, setEmailCode] = useState<string>('0000');
  const [verify] = useState(new VerificationModel());
  const [toast, setToast] = useState<{
    error: boolean;
    message: string | undefined;
  }>({error: false, message: undefined});
  const {
    actions: {sendVerifyCode},
  } = useAuthenticationContext();
  const {
    actions: {updateAuth},
  } = useNavigationContext();
  const {
    state: {sendVerifyCodeLoader},
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

  const onEmail = (value: string) => (verify.email = value);

  const onSubmit = async () => {
    try {
      verify.validateEmail();
      sendVerifyCode({
        email: verify.email,
        code_type: VERIFICATION_CODE.RESET_PASSWORD,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((code: string) => {
          if (code === '0003') {
            setEmailCode(code);
          }
        });
      } else {
        const toastSignIn = {error: true, message: error.message};
        setToast(toastSignIn);
      }
    }
  };

  const goToSignIn = () => updateAuth(AUTH_NAV_VIEW.SIGN_IN);

  return (
    <Screen>
      <ScrollContainer>
        <AppLogo />

        <EmailField onValue={onEmail} code={emailCode} />

        <GradientButton
          onPress={onSubmit}
          text={strings('button.send_verification_code')}
        />

        <SubTitle
          text={strings('button.return_to_sign_in')}
          onClick={goToSignIn}
          center
          bold
        />
      </ScrollContainer>
      <Toast toast={toast} />
      <Loading show={sendVerifyCodeLoader} />
    </Screen>
  );
};
