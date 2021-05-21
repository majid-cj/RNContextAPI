import {AppTheme} from '@react-navigation/native';

export type ThemeProviderProps = {};

export type ThemeContextProps = {
  theme: AppTheme;
  toggleTheme: () => void;
};
