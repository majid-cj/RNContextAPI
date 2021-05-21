import React, {FC, useEffect, useState} from 'react';
import {GradientButton} from '../../components/buttons';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';
import {VerifyCodeField} from '../../components/inputs';
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
import {getUser} from '../../services/storage';

export const VerifyCodeScreen: FC = () => {
  const [verifyCodeCode, setVerifyCodeCode] = useState<string>('0000');
  const [verification] = useState(new VerificationModel());
  const [toast, setToast] = useState<{
    error: boolean;
    message: string | undefined;
  }>({error: false, message: undefined});
  const {
    actions: {updateAuth},
  } = useNavigationContext();
  const {
    actions: {verifyCode, reSendVerifyCode},
  } = useAuthenticationContext();
  const {
    state: {verifyCodeLoader, reSendVerifyCodeLoader},
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

  const onValue = (code: string) => {
    verification.code = code;
  };

  const onVerify = async () => {
    try {
      verification.validateVerifyCode();
      const user = await getUser();
      verifyCode({
        code: verification.code,
        code_type: VERIFICATION_CODE.NEW_USER,
        member: user.id,
        email: user.email,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((code: string) => {
          if (code === '0006') {
            setVerifyCodeCode(code);
          }
        });
      } else {
        const toastSignIn = {error: true, message: error.message};
        setToast(toastSignIn);
      }
    }
  };

  const resend = async () => {
    try {
      const user = await getUser();
      reSendVerifyCode({
        email: user.email,
        code_type: VERIFICATION_CODE.NEW_USER,
      });
    } catch (error) {
      const toastSignUp = {error: true, message: error.message};
      setToast(toastSignUp);
    }
  };

  const goToSignIn = () => updateAuth(AUTH_NAV_VIEW.SIGN_IN);

  return (
    <Screen>
      <ScrollContainer>
        <AppLogo />

        <VerifyCodeField onValue={onValue} code={verifyCodeCode} />
        <GradientButton
          text={strings('button.verify_code')}
          onPress={onVerify}
        />

        <SubTitle
          text={strings('button.resend_code')}
          onClick={resend}
          center
          bold
        />

        <SubTitle
          text={strings('button.return_to_sign_in')}
          onClick={goToSignIn}
          center
          bold
        />
      </ScrollContainer>
      <Toast toast={toast} />
      <Loading show={verifyCodeLoader} />
      <Loading show={reSendVerifyCodeLoader} />
    </Screen>
  );
};
