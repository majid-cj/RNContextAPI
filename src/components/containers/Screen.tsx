import React, {FC} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {useThemeContext} from '../../hooks';
import {screenStyles} from './styles';

type Props = {};

export const Screen: FC<Props> = ({children}) => {
  const {theme} = useThemeContext();
  const {
    theme: {dark},
  } = useThemeContext();
  const {container, safeArea} = screenStyles(theme);
  return (
    <>
      <StatusBar barStyle={dark ? 'dark-content' : 'light-content'} />
      <SafeAreaView style={safeArea}>
        <View style={container}>{children}</View>
      </SafeAreaView>
    </>
  );
};
