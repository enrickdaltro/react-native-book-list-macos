import React from 'react';

import Books from 'containers/Books';
import {root, StoreProvider} from 'store/root';

interface IProps {}

export const App = (props: IProps) => {
  return (
    <StoreProvider value={root}>
      <Books />
    </StoreProvider>
  );
};
