import {AppTheme} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';
import {fonts} from '../../resources/fonts';

const {width, height} = Dimensions.get('screen');

export const screenStyles = ({colors: {background}}: AppTheme) =>
  StyleSheet.create({
    keyboardAvoid: {
      flex: 1,
      backgroundColor: background,
    },
    safeArea: {
      flex: 1,
      backgroundColor: background,
    },
    container: {
      flex: 1,
      backgroundColor: background,
    },
  });

export const FieldContainerStyles = (
  {colors: {danger, background, secondary}}: AppTheme,
  error: boolean,
) =>
  StyleSheet.create({
    container: {
      height: 40,
      backgroundColor: background,
      borderRadius: 0,
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      borderWidth: 1,
      flex: 1,
      marginBottom: 16,
      marginTop: 8,
      borderBottomColor: error ? danger : secondary,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
    },
    childrenContainer: {
      flex: 1,
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 4,
      position: 'absolute',
      bottom: -24,
    },
    text: {
      fontFamily: fonts.lato,
      fontSize: 10,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginStart: 4,
      color: danger,
    },
  });

export const scrollContainerStyles = ({}: AppTheme) =>
  StyleSheet.create({
    scroll: {
      width: width,
      height: height,
    },
    view: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
    },
  });
