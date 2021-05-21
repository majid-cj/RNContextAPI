import '@react-navigation/native';
import {Theme} from '@react-navigation/native';

declare module '@react-navigation/native' {
  export type AppTheme = {
    dark: boolean;
    colors: {
      secondary: string;
      accent: string;
      danger: string;
      success: string;
      warning: string;
      black: string;
      light: string;
    };
  } & Theme;
  export function useTheme(): AppTheme;
}
