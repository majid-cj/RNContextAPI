import React, {FC, ReactElement, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import SVG from 'react-native-svg';
import {useThemeContext} from '../../hooks';
import {imageViewStyle} from './styles';

interface Props {
  uri?: string;
  is_round?: boolean;
  placeholder?: ReactElement<SVG>;
}

export const ImageView: FC<Props> = ({uri, is_round = false, placeholder}) => {
  const [image_key, set_image_key] = useState<number>(0);
  const [viewPlaceholder, setViewPlaceholder] = useState<boolean>(false);
  const {theme} = useThemeContext();
  const {container, image, roundImage, roundImageCircle} = imageViewStyle(
    theme,
    is_round,
  );

  const reload = () => {
    setViewPlaceholder(false);
    set_image_key(Math.random());
  };

  if (viewPlaceholder) {
    return (
      <TouchableOpacity style={container} activeOpacity={0.9} onPress={reload}>
        {placeholder}
      </TouchableOpacity>
    );
  }

  return (
    <View style={container}>
      <Image
        key={image_key}
        style={[image, is_round ? roundImageCircle : roundImage]}
        source={{uri: uri, cache: 'force-cache'}}
        onError={() => setViewPlaceholder(true)}
      />
    </View>
  );
};
