import {makeAutoObservable} from 'mobx';
import {IRootStore} from 'store/root';

export let createBooksStore = (root: IRootStore) => {
  let store = makeAutoObservable({
    books: [
      {
        title: 'Lord of the rings',
        createdAt: '2021-02-02:T13:00:00Z',
      },
      {
        title: 'Dune',
        createdAt: '2021-02-02:T13:02:00Z',
      },
      {
        title: 'Neuromancer',
        createdAt: '2021-02-02:T13:04:00Z',
      },
    ],

    // Computed
    get uppercasedBooks(): {title: string; createdAt: string}[] {
      return store.books.map((book) => ({
        ...book,
        title: book.title.toUpperCase(),
      }));
    },

    // Actions
    addBook(title: string) {
      store.books.push({title, createdAt: new Date().toISOString()});
    },
  });

  return store;
};
