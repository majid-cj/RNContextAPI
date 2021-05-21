import React, {FC, useEffect, useMemo, useState} from 'react';
import {Text, Animated} from 'react-native';
import {toastStyle} from './styles';
import {useThemeContext} from '../../hooks';

interface Props {
  toast: ToastProps;
}

export type ToastProps = {
  error?: boolean;
  warning?: boolean;
  success?: boolean;
  message: string | undefined;
};

const Toast: FC<Props> = ({toast: toast}) => {
  const {theme} = useThemeContext();
  const {colors} = theme;
  const initialState = {
    error: false,
    warning: false,
    success: false,
    message: undefined,
  };

  const [toastValue, setToastValue] = useState<ToastProps>(initialState);

  const {container, messageStyle} = toastStyle(theme);
  const animation = useMemo(() => new Animated.Value(0), []);
  const startAnimation = useMemo(
    () => () => {
      animation.stopAnimation();
      animation.setValue(0);
      Animated.timing(animation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    },
    [animation],
  );

  const translateY = animation.interpolate({
    inputRange: [0, 0.125, 0.875, 1],
    outputRange: [0, -150, -150, 0],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    setToastValue(toast);
    startAnimation();
  }, [toast, startAnimation]);

  const {message, error, success, warning} = toastValue;

  if (message === undefined) {
    return null;
  }

  return (
    <Animated.View
      style={[
        container,
        {
          transform: [{translateY: translateY}],
        },
        error && {backgroundColor: colors.danger},
        success && {backgroundColor: colors.success},
        warning && {backgroundColor: colors.warning},
      ]}>
      <Text style={messageStyle}>{message}</Text>
    </Animated.View>
  );
};

export {Toast};
