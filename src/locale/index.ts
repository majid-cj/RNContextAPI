import {I18nManager, NativeModules, Platform} from 'react-native';
import en from './en';
import ar from './ar';
import I18n from 'i18n-js';

I18n.fallbacks = true;
I18n.translations = {
  en,
  ar,
};

export const getAppLanguage = async (): Promise<string> => {
  try {
    let languageTag = 'en';
    let deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    languageTag = deviceLanguage.toString().split('_')[0];
    return languageTag;
  } catch (err) {
    return 'en';
  }
};

export const setAppLanguage = async (language: string): Promise<string> => {
  try {
    I18n.locale = language;
    I18nManager.forceRTL(language === 'ar');
    I18nManager.allowRTL(language === 'ar');
    return language;
  } catch (error) {
    return language;
  }
};

export const strings = (name: string, params = {}): string => {
  return I18n.t(name, params);
};

export default I18n;
