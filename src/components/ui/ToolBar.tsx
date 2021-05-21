import React, {FC, ReactElement} from 'react';
import {View} from 'react-native';
import {useThemeContext} from '../../hooks';
import {BackButton} from '../buttons';
import {toolBarStyles} from './styles';

interface Props {
  back?: boolean;
  menuButton?: ReactElement;
  center?: ReactElement;
}

export const ToolBar: FC<Props> = ({back, center, menuButton}) => {
  const {theme} = useThemeContext();
  const {area, container} = toolBarStyles(theme);

  const saveArea = <View style={area} />;

  return (
    <View style={container}>
      {back ? <BackButton /> : saveArea}
      {center}
      {menuButton || saveArea}
    </View>
  );
};
