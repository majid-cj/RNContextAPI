import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {fonts} from '../../resources/fonts';

export const gradientButtonStyles = ({colors}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 40,
      backgroundColor: 'transparent',
      marginVertical: 8,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 8,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: colors.text,
      fontSize: 18,
      fontFamily: fonts.lato,
    },
  });

export const iconButtonStyle = ({colors: {light, accent}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      margin: 4,
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: light,
      borderColor: accent,
      borderWidth: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const backButtonStyle = ({colors: {light}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: 24,
      height: 24,
      backgroundColor: light,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
