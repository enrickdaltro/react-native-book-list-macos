import {createContext, useContext} from 'react';
import {createBooksStore} from './books.store';

export interface IRootStore {
  books: ReturnType<typeof createBooksStore>;
}

let createRootStore = (): IRootStore => {
  let store: any = {};

  store.books = createBooksStore(store);

  return store;
};

export let root = createRootStore();

export let StoreContext = createContext<IRootStore>(root);
export let StoreProvider = StoreContext.Provider;
export let useStore = () => useContext(StoreContext);
