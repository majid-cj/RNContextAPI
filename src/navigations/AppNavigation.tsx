import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppParamsList} from './types';
import {HomeNavigation} from './HomeNavigation';
import {AuthenticationNavigation} from './AuthenticationNavigation';
import {useNavigationContext} from '../hooks';
import {APP_NAV_VIEW} from '../constants';

const {Navigator, Screen} = createStackNavigator<AppParamsList>();

export const AppNavigation: FC = () => {
  const {
    state: {app},
  } = useNavigationContext();

  return (
    <Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{animationEnabled: true}}>
      {app === APP_NAV_VIEW.REGISTRATION && (
        <Screen name="AUTH" component={AuthenticationNavigation} />
      )}
      {app === APP_NAV_VIEW.HOME && (
        <Screen name="HOME" component={HomeNavigation} />
      )}
    </Navigator>
  );
};
