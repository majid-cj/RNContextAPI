import {I18nManager} from 'react-native';

export const doNothing = (...args: any[]) => {};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number = 75,
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<F>): Promise<ReturnType<F>> =>
    new Promise(resolve => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
};

export const getName = (param_ar: string, param_en: string): string => {
  return I18nManager.isRTL ? param_ar : param_en;
};
