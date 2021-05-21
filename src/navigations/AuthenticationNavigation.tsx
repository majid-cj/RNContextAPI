import React, {FC, useEffect} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {AuthParamsList} from './types';
import {SignInScreen} from '../screens/sign-in/SignInScreen';
import {SignUpScreen} from '../screens/sign-up/SignUpScreen';
import {VerifyCodeScreen} from '../screens/verify-code/VerifyCodeScreen';
import {ForgetPasswordScreen} from '../screens/forget-password/ForgetPasswordScreen';
import {RenewPasswordScreen} from '../screens/renew-password/RenewPasswordScreen';
import {useNavigationContext} from '../hooks';
import {AUTH_NAV_VIEW} from '../constants';
import {getUser} from '../services/storage';
import {RouteProp} from '@react-navigation/core';

export type ForgetPasswordNavigation = StackNavigationProp<
  AuthParamsList,
  'FORGET_PASSWORD'
>;
export type ReNewPasswordRouter = RouteProp<AuthParamsList, 'RENEW_PASSWORD'>;

const {Navigator, Screen} = createStackNavigator<AuthParamsList>();

export const AuthenticationNavigation: FC = () => {
  const {
    state: {auth},
    actions: {updateAuth},
  } = useNavigationContext();

  useEffect(() => {
    (async () => {
      const user = await getUser();
      updateAuth(
        user === undefined ? AUTH_NAV_VIEW.SIGN_IN : AUTH_NAV_VIEW.OTP,
      );
    })();
  }, [updateAuth]);

  return (
    <Navigator
      headerMode="none"
      initialRouteName="SIGN_IN"
      mode="modal"
      screenOptions={{animationEnabled: true}}>
      {auth === AUTH_NAV_VIEW.SIGN_IN && (
        <Screen name="SIGN_IN" component={SignInScreen} />
      )}
      {auth === AUTH_NAV_VIEW.SIGN_UP && (
        <Screen name="SIGN_UP" component={SignUpScreen} />
      )}
      {auth === AUTH_NAV_VIEW.OTP && (
        <Screen name="OTP" component={VerifyCodeScreen} />
      )}
      {auth === AUTH_NAV_VIEW.FORGET_PASSWORD && (
        <Screen name="FORGET_PASSWORD" component={ForgetPasswordScreen} />
      )}
      {auth === AUTH_NAV_VIEW.RENEW_PASSWORD && (
        <Screen name="RENEW_PASSWORD" component={RenewPasswordScreen} />
      )}
    </Navigator>
  );
};
