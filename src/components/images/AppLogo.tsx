import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {appLogoStyles} from './styles';
import {useThemeContext} from '../../hooks';

interface Props {
  marginTop?: number;
}

export const AppLogo: FC<Props> = ({marginTop = 25}) => {
  const {theme} = useThemeContext();
  const {container, image} = appLogoStyles(theme);
  return (
    <View style={[container, {marginTop: `${marginTop}%`}]}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/favicon.png',
          cache: 'force-cache',
        }}
        style={image}
      />
    </View>
  );
};
