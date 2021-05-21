import React, {FC, useEffect, useState} from 'react';
import {InputFieldProps} from '.';
import {strings} from '../../locale';
import {InputValidator} from '../../utils/validators';
import {FieldInput} from './FieldInput';

export const VerifyCodeField: FC<InputFieldProps> = ({
  onValue,
  code = '0000',
}) => {
  const [otp, setOTP] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (value: string) => {
    setOTP(value);
    onValue(value);
    setError(InputValidator.validateVerifyCode(value));
  };

  useEffect(() => {
    setError(code === '0006');
  }, [code]);

  return (
    <FieldInput
      value={otp}
      error={error}
      onTextChange={onInputChange}
      placeholder={strings('label.input.verification_code')}
      helper={strings('label.helper.verification_code')}
    />
  );
};
