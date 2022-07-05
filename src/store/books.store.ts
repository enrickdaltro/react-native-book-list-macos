import {makeAutoObservable, runInAction} from 'mobx';
import {IRootStore} from 'store/root';

interface IBook {
  title: string;
  createdAt: string;
}

export let createBooksStore = (root: IRootStore) => {
  let store = makeAutoObservable({
    books: [] as IBook[],

    get uppercasedBooks(): IBook[] {
      return store.books.map((book) => ({
        ...book,
        title: book.title.toUpperCase(),
      }));
    },

    async addBook(title: string) {
      const books = await root.api.addBook(title);

      if (books) {
        runInAction(() => {
          store.books = books;
        });
      }
    },

    async fetchBooks() {
      const books = await root.api.fetchBooks();

      runInAction(() => {
        store.books = books;
      });
    },
  });

  return store;
};
