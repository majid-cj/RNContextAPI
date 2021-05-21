import {AppTheme} from '@react-navigation/native';
import {I18nManager, StyleSheet} from 'react-native';
import {fonts} from '../../resources/fonts';

export const inputFieldStyle = ({colors: {black}}: AppTheme, center: boolean) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 8,
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      textAlign: center ? 'center' : I18nManager.isRTL ? 'right' : 'left',
    },
    text: {
      flex: 1,
      fontSize: 16,
      fontFamily: fonts.lato,
      textAlignVertical: 'center',
      backgroundColor: 'transparent',
      marginHorizontal: 4,
      height: '100%',
      color: black,
    },
    passwordContainer: {
      padding: 8,
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
    },
  });
