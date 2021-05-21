import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {scrollContainerStyles} from './styles';
import {useThemeContext} from '../../hooks';

export const ScrollContainer: FC = ({children}) => {
  const {theme} = useThemeContext();
  const {scroll, view} = scrollContainerStyles(theme);

  return (
    <ScrollView style={scroll} showsVerticalScrollIndicator={false}>
      <View style={view}>{children}</View>
    </ScrollView>
  );
};
