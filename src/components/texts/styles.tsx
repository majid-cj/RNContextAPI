import {AppTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {fonts} from '../../resources/fonts';

export const subTitleStyle = ({colors: {text}}: AppTheme) =>
  StyleSheet.create({
    textStyle: {
      textAlignVertical: 'center',
      marginVertical: 4,
      padding: 4,
      color: text,
    },
    centerStyle: {
      textAlign: 'center',
    },
    leftStyle: {
      alignSelf: 'flex-start',
      textAlign: 'left',
    },
    boldText: {
      fontFamily: fonts.bold,
      fontSize: 22,
    },
    lightText: {
      fontFamily: fonts.lato,
      fontSize: 18,
    },
  });
