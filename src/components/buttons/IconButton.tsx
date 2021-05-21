import React, {FC, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {useThemeContext} from '../../hooks';
import {iconButtonStyle} from './styles';

interface Props {
  icon: ReactNode;
  onPress: () => void;
}

export const IconButton: FC<Props> = ({icon, onPress}) => {
  const {theme} = useThemeContext();

  const {container} = iconButtonStyle(theme);
  return (
    <TouchableOpacity onPress={onPress} style={container} activeOpacity={0.9}>
      {icon}
    </TouchableOpacity>
  );
};
