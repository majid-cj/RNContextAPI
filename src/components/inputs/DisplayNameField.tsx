import React, {FC, useEffect, useState} from 'react';
import {FieldInput} from './FieldInput';
import {InputFieldProps} from '.';
import {InputValidator} from '../../utils/validators';
import {strings} from '../../locale';

export const DisplayNameField: FC<InputFieldProps> = ({
  initialValue = '',
  editable = true,
  code = '0000',
  onValue,
}) => {
  const [name, setName] = useState<string>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const onInputChange = (value: string) => {
    setName(value);
    onValue(value);
    setError(InputValidator.validateInputLength(value, 25));
  };

  useEffect(() => {
    setError(code === '0002');
  }, [code]);

  return (
    <FieldInput
      value={name}
      error={error}
      onTextChange={onInputChange}
      placeholder={strings('label.input.display_name')}
      helper={strings('label.helper.display_name')}
      editable={editable}
    />
  );
};
