import {AppTheme} from '@react-navigation/native';
import {Dimensions, StyleSheet} from 'react-native';

export const {width: SCREEN_WIDTH} = Dimensions.get('screen');

export const imageViewStyle = (
  {colors: {accent}}: AppTheme,
  is_round: boolean = false,
) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      borderRadius: is_round ? SCREEN_WIDTH : 8,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderColor: accent,
      overflow: 'hidden',
    },
    image: {
      resizeMode: 'cover',
      aspectRatio: 1,
      flex: 1,
    },
    roundImageCircle: {
      borderTopRightRadius: SCREEN_WIDTH,
      borderTopLeftRadius: SCREEN_WIDTH,
      borderBottomRightRadius: SCREEN_WIDTH,
      borderBottomLeftRadius: SCREEN_WIDTH,
    },
    roundImage: {
      borderTopRightRadius: 8,
      borderTopLeftRadius: 8,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 8,
    },
  });

export const appLogoStyles = ({}: AppTheme) =>
  StyleSheet.create({
    container: {
      height: SCREEN_WIDTH / 3,
      width: SCREEN_WIDTH / 3,
      backgroundColor: 'transparent',
      margin: 16,
      padding: 16,
    },
    image: {
      resizeMode: 'cover',
      aspectRatio: 1,
    },
  });
