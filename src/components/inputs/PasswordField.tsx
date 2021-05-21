import React, {FC, useEffect, useState} from 'react';
import {InputFieldProps} from '.';
import {strings} from '../../locale';
// import {PasswordIcon} from '../../resources/icons/registration';
import {InputValidator} from '../../utils/validators';
import {FieldInput} from './FieldInput';

export const PasswordField: FC<InputFieldProps> = ({
  onValue,
  code = '0000',
}) => {
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (value: string) => {
    setPassword(value);
    onValue(value);
    setError(InputValidator.validatePassword(value));
  };

  useEffect(() => {
    setError(code === '0004');
  }, [code]);

  return (
    <FieldInput
      value={password}
      error={error}
      secure={true}
      onTextChange={onInputChange}
      placeholder={strings('label.input.password')}
      helper={strings('label.helper.password')}
      showPassword={true}
    />
  );
};
