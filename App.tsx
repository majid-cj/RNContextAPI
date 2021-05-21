import React, {FC, useEffect, useState} from 'react';
import {
  ThemeContextProvider,
  UIProvider,
  NavigationProvider,
  ErrorProvider,
  AuthenticationProvider,
} from './src/hooks';
import {getAppLanguage, setAppLanguage} from './src/locale';
import {RootNavigation} from './src/navigations';

const App: FC = () => {
  const [lang, setLang] = useState<undefined | string>(undefined);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let local = await getAppLanguage();
    const language = await setAppLanguage(local);
    setLang(language);
  };

  if (lang === undefined) return null;

  return (
    <ThemeContextProvider>
      <UIProvider>
        <NavigationProvider>
          <ErrorProvider>
            <AuthenticationProvider>
              <RootNavigation />
            </AuthenticationProvider>
          </ErrorProvider>
        </NavigationProvider>
      </UIProvider>
    </ThemeContextProvider>
  );
};

export default App;
