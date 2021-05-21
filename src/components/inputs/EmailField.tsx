import React, {FC, useEffect, useState} from 'react';
import {InputValidator} from '../../utils/validators';
import {FieldInput} from './FieldInput';
import {InputFieldProps} from '.';
import {strings} from '../../locale';

export const EmailField: FC<InputFieldProps> = ({
  initialValue = '',
  editable = true,
  code = '0000',
  onValue,
}) => {
  const [email, setEmail] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (value: string) => {
    setEmail(value);
    onValue(value);
    setError(InputValidator.validateEmail(value));
  };

  useEffect(() => {
    setError(code === '0003');
  }, [code]);

  return (
    <FieldInput
      value={email}
      error={error}
      onTextChange={onInputChange}
      keyBoard={'email-address'}
      placeholder={strings('label.input.email')}
      helper={strings('label.helper.email')}
      editable={editable}
    />
  );
};
