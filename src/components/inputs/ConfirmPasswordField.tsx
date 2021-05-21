import React, {FC, useEffect, useState} from 'react';
import {InputFieldProps} from '.';
import {strings} from '../../locale';
import {FieldInput} from './FieldInput';

export const ConfirmPasswordField: FC<InputFieldProps> = ({
  initialValue = '',
  onValue,
  code = '0000',
}) => {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (value: string) => {
    setPassword(value);
    onValue(value);
    setError(password !== initialValue);
  };

  useEffect(() => {
    setError(code === '0005');
  }, [code]);

  return (
    <FieldInput
      value={password}
      error={error}
      secure={true}
      onTextChange={onInputChange}
      placeholder={strings('label.input.confirm_password')}
      helper={strings('label.helper.confirm_password')}
      showPassword={true}
    />
  );
};
