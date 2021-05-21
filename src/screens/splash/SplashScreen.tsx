import React, {FC} from 'react';
import {Screen, ScrollContainer} from '../../components/containers';
import {AppLogo} from '../../components/images';

export const SplashScreen: FC = () => {
  return (
    <Screen>
      <ScrollContainer>
        <AppLogo marginTop={55} />
      </ScrollContainer>
    </Screen>
  );
};
