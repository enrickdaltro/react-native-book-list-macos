import React from 'react';

import {root, StoreProvider} from 'store/root';
import {Routes} from 'routes';
import {NavigationContainer} from '@react-navigation/native';

interface IProps {}

export const App = (props: IProps) => {
  return (
    <NavigationContainer>
      <StoreProvider value={root}>
        <Routes />
      </StoreProvider>
    </NavigationContainer>
  );
};
