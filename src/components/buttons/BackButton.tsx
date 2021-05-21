import React, {FC} from 'react';
import {TouchableOpacity, I18nManager} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useThemeContext} from '../../hooks';
import {backButtonStyle} from './styles';
import {ArrowLeft, ArrowRight} from '../../resources/icons/common';

interface Props {}

export const BackButton: FC<Props> = () => {
  const {goBack} = useNavigation();
  const {theme} = useThemeContext();
  const {
    colors: {accent},
  } = theme;

  const onPress = () => goBack();

  const {container} = backButtonStyle(theme);
  return (
    <TouchableOpacity onPress={onPress} style={container} activeOpacity={0.9}>
      {I18nManager.isRTL ? (
        <ArrowRight color={accent} />
      ) : (
        <ArrowLeft color={accent} />
      )}
    </TouchableOpacity>
  );
};
