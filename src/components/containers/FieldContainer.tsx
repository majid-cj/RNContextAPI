import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {FieldContainerStyles} from './styles';
import {useThemeContext} from '../../hooks';
import {AboutIcon} from '../../resources/icons/common';

interface Props {
  helper?: string;
  error?: boolean;
}

export const FieldContainer: FC<Props> = ({
  helper,
  error = false,
  children,
}) => {
  const {theme} = useThemeContext();
  const {
    colors: {danger},
  } = theme;
  const {container, childrenContainer, subContainer, text} =
    FieldContainerStyles(theme, error);
  return (
    <View style={container}>
      <View style={childrenContainer}>{children}</View>
      {error && (
        <View style={subContainer}>
          <AboutIcon size={10} color={danger} />
          <Text style={text} numberOfLines={1}>
            {helper}
          </Text>
        </View>
      )}
    </View>
  );
};
