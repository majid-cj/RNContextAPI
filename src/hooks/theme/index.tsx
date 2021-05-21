import React, {createContext, FC, useContext, useState} from 'react';
import {Appearance} from 'react-native';
import {AppTheme, useTheme} from '@react-navigation/native';
import {AppDarkTheme, AppLightTheme} from '../../resources/theme';
import {ThemeProviderProps, ThemeContextProps} from './types';

const ThemeContext = createContext<ThemeContextProps>({
  theme: AppLightTheme,
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: FC<ThemeProviderProps> = ({children}) => {
  const {dark} = useTheme();
  const device_theme = Appearance.getColorScheme();
  const [theme, setTheme] = useState<AppTheme>(
    device_theme === 'dark' ? AppDarkTheme : AppLightTheme,
  );
  const toggleTheme = () => setTheme(dark ? AppLightTheme : AppDarkTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
