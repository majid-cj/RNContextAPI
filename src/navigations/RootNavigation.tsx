import 'react-native-gesture-handler';
import React, {FC, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from '../screens/splash/SplashScreen';
import {AppNavigation} from './AppNavigation';
import {RootParamsList} from './types';
import {
  useAuthenticationContext,
  useNavigationContext,
  useThemeContext,
} from '../hooks';
import {APP_NAV_VIEW, ROOT_NAV_VIEW} from '../constants';
import {StatusBar} from 'react-native';
import {getUser} from '../services/storage';

const {Navigator, Screen} = createStackNavigator<RootParamsList>();

export const RootNavigation: FC = () => {
  const {
    state: {root},
    actions: {updateRoot, updateApp},
  } = useNavigationContext();
  const {theme} = useThemeContext();
  const {
    actions: {refreshToken},
  } = useAuthenticationContext();
  const {
    colors: {background, light},
  } = theme;

  useEffect(() => {
    StatusBar.setBackgroundColor(light);
    (async () => {
      refreshToken();
      const user = await getUser();
      updateRoot(ROOT_NAV_VIEW.APP);
      updateApp(
        user === undefined ? APP_NAV_VIEW.REGISTRATION : APP_NAV_VIEW.HOME,
      );
    })();
  }, [refreshToken, updateRoot, updateApp, background, light]);

  return (
    <NavigationContainer theme={theme}>
      <Navigator
        initialRouteName="SPLASH"
        headerMode="none"
        mode="modal"
        screenOptions={{animationEnabled: true}}>
        {root === ROOT_NAV_VIEW.SPLASH && (
          <Screen name="SPLASH" component={SplashScreen} />
        )}
        {root === ROOT_NAV_VIEW.APP && (
          <Screen name="APP" component={AppNavigation} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};
