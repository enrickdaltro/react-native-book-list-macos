import {createContext, useContext} from 'react';
import {createApiStore} from './api.store';
import {createBooksStore} from './books.store';

export interface IRootStore {
  books: ReturnType<typeof createBooksStore>;
  api: ReturnType<typeof createApiStore>;
}

let createRootStore = (): IRootStore => {
  let store: any = {};

  store.books = createBooksStore(store);
  store.api = createApiStore(store);

  return store;
};

export let root = createRootStore();

export let StoreContext = createContext<IRootStore>(root);
export let StoreProvider = StoreContext.Provider;
export let useStore = () => useContext(StoreContext);
