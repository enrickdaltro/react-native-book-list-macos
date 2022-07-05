import React from 'react';
import {View, Text} from 'react-native';
import Books from './containers/Books';
import {root, StoreProvider} from './store';

interface IProps {}

export const App = (props: IProps) => {
  return (
    <StoreProvider value={root}>
      <Books />
    </StoreProvider>
  );
};
