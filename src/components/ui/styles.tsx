import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {fonts} from '../../resources/fonts';

export const vendorAuthStepStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 16,
      left: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export const gradientStepStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 24,
      height: 24,
      borderRadius: 12,
      overflow: 'hidden',
      marginHorizontal: 4,
    },
    text: {
      fontSize: 12,
      color: 'white',
      fontFamily: fonts.lato,
    },
  });

export const loadingStyle = ({colors: {light}}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingContainer: {
      backgroundColor: light,
      padding: 16,
      borderRadius: 32,
      overflow: 'hidden',
      elevation: 2,
    },
  });

export const toastStyle = ({colors: {primary, text}}: AppTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: -75,
      alignSelf: 'center',
      borderRadius: 8,
      overflow: 'hidden',
      justifyContent: 'center',
      opacity: 0.8,
      backgroundColor: primary,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    messageStyle: {
      color: text,
      fontFamily: fonts.lato,
      textAlign: 'center',
      flex: 1,
      textAlignVertical: 'center',
      fontSize: 12,
    },
  });

export const spinnerStyle = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const toolBarStyles = ({colors: {light}}: AppTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: light,
    },
    area: {
      width: 24,
      height: 24,
    },
  });
