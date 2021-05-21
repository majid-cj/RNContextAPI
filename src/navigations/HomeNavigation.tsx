import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeParamsList} from './types';
import {HomeScreen} from '../screens/home/HomeScreen';

const {Navigator, Screen} = createStackNavigator<HomeParamsList>();

export const HomeNavigation: FC = () => {
  return (
    <Navigator
      initialRouteName="HOME"
      headerMode="none"
      mode="modal"
      screenOptions={{animationEnabled: true}}>
      <Screen name="HOME" component={HomeScreen} />
    </Navigator>
  );
};
