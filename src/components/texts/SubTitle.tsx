import React, {FC} from 'react';
import {Text} from 'react-native';
import {useThemeContext} from '../../hooks';
import {subTitleStyle} from './styles';

interface Props {
  text: string;
  onClick?: () => void;
  center?: boolean;
  bold?: boolean;
}

export const SubTitle: FC<Props> = ({text, center, bold, onClick}) => {
  const {theme} = useThemeContext();
  const {textStyle, centerStyle, leftStyle, boldText, lightText} =
    subTitleStyle(theme);

  return (
    <Text
      style={[
        textStyle,
        center ? centerStyle : leftStyle,
        bold ? boldText : lightText,
      ]}
      numberOfLines={1}
      onPress={onClick}>
      {text}
    </Text>
  );
};
