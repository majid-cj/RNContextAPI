import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientButtonStyles} from './styles';
import {useThemeContext} from '../../hooks';

interface Props {
  onPress: () => void;
  text: string;
  colors?: Array<string>;
}

export const GradientButton: FC<Props> = ({onPress, text, colors}) => {
  const {theme} = useThemeContext();
  const gradientColor = colors || [theme.colors.primary, theme.colors.primary];
  const {container, linearGradient, textStyle} = gradientButtonStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.95} style={container}>
      <LinearGradient
        colors={gradientColor}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={linearGradient}>
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
