import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useThemeContext} from '../../hooks';
import {spinnerStyle} from './styles';

interface Props {
  size?: number;
  marginTop?: number;
}

export const Spinner: FC<Props> = ({size = 64, marginTop = 0}) => {
  const {theme} = useThemeContext();

  const {
    colors: {primary},
  } = theme;

  const {container} = spinnerStyle(theme);

  return (
    <View style={[container, {marginTop: `${marginTop}%`}]}>
      <ActivityIndicator size={size} color={primary} />
    </View>
  );
};
