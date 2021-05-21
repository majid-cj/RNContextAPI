import React, {FC, useEffect, useState} from 'react';
import {GradientButton} from '../../components/buttons';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';
import {VerifyCodeField, PasswordField} from '../../components/inputs';
import {Loading, Toast} from '../../components/ui';
import {AUTH_NAV_VIEW, VERIFICATION_CODE} from '../../constants';
import {
  useAuthenticationContext,
  useErrorContext,
  useNavigationContext,
  useThemeContext,
  useUIContext,
} from '../../hooks';
import {strings} from '../../locale';
import {VerificationModel} from '../../models';
import {getVerify} from '../../services/storage';

export const RenewPasswordScreen: FC = () => {
  const [verifyCodeCode, setVerifyCodeCode] = useState<string>('0000');
  const [passwordCode, setPasswordCode] = useState<string>('0000');
  const [verify] = useState(new VerificationModel());
  const [toast, setToast] = useState<{
    error: boolean;
    message: string | undefined;
  }>({error: false, message: undefined});
  const {
    actions: {forgetPassword},
  } = useAuthenticationContext();
  const {
    actions: {updateAuth},
  } = useNavigationContext();
  const {
    theme: {
      colors: {primary},
    },
  } = useThemeContext();
  const {
    state: {forgetPasswordLoader},
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

  const onVerifyCode = (value: string) => (verify.code = value);

  const onPassword = (value: string) => (verify.password = value);

  const onSubmit = async () => {
    try {
      verify.validateVerifyCodeAndPassword();
      const {email} = await getVerify();
      forgetPassword({
        email: email,
        code: verify.code,
        password: verify.password,
        code_type: VERIFICATION_CODE.RESET_PASSWORD,
      });
    } catch (error) {
      if (Array.isArray(error)) {
        error.map((code: string) => {
          if (code === '0006') {
            setVerifyCodeCode(code);
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

  const goToSignIn = () => updateAuth(AUTH_NAV_VIEW.SIGN_IN);

  return (
    <Screen>
      <ScrollContainer>
        <AppLogo />

        <VerifyCodeField onValue={onVerifyCode} code={verifyCodeCode} />

        <PasswordField onValue={onPassword} code={passwordCode} />

        <GradientButton
          onPress={onSubmit}
          text={strings('button.send_verification_code')}
        />

        <GradientButton
          onPress={goToSignIn}
          text={strings('button.return_to_sign_in')}
          colors={[primary, primary]}
        />
      </ScrollContainer>
      <Toast toast={toast} />
      <Loading show={forgetPasswordLoader} />
    </Screen>
  );
};
