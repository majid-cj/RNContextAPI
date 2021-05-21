import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import SVG from 'react-native-svg';
import {FieldContainer} from '../containers';
import {inputFieldStyle} from './styles';
import {ShowPassword, PasswordIcon} from '../../resources/icons/common';
import {useThemeContext} from '../../hooks';

interface Props {
  value: string;
  placeholder?: string;
  helper?: string;
  secure?: boolean;
  error?: boolean;
  showPassword?: boolean;
  focus?: boolean;
  editable?: boolean;
  center?: boolean;
  icon?: ReactElement<SVG>;
  keyBoard?: KeyboardTypeOptions;
  onTextChange?: (value: string) => void;
}

export const FieldInput: FC<Props> = ({
  value,
  placeholder,
  helper,
  focus,
  error,
  icon,
  keyBoard = 'default',
  showPassword = false,
  editable = true,
  secure = false,
  center = false,
  onTextChange,
}) => {
  const [secureValue, setSecureValue] = useState<boolean>(secure);
  const inputRef = useRef<TextInput>(null);
  const {theme} = useThemeContext();
  const {
    theme: {
      colors: {secondary, primary},
    },
  } = useThemeContext();
  const {container, passwordContainer, text} = inputFieldStyle(theme, center);

  useEffect(() => {
    if (focus === true) {
      inputRef?.current?.focus();
    }
  }, [focus]);

  const showPasswordOnPress = () => {
    setSecureValue(!secureValue);
  };

  return (
    <FieldContainer helper={helper} error={error}>
      <View style={container}>
        {icon}
        <TextInput
          ref={inputRef}
          value={value}
          secureTextEntry={secureValue}
          keyboardType={keyBoard}
          placeholder={placeholder}
          placeholderTextColor={secondary}
          editable={editable}
          onChangeText={onTextChange}
          style={text}
          numberOfLines={1}
        />
        {showPassword && (
          <TouchableOpacity
            onPress={showPasswordOnPress}
            activeOpacity={1}
            style={passwordContainer}>
            {secureValue ? (
              <PasswordIcon size={24} color={secondary} />
            ) : (
              <ShowPassword size={24} color={primary} />
            )}
          </TouchableOpacity>
        )}
      </View>
    </FieldContainer>
  );
};
