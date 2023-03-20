import { makeAutoObservable } from 'mobx';

import { BookService, QueryConfig } from '@/services/book/book.service';
import { Book } from '@/types';

class Books {
  books: Book[] | null = null;
  totalLength = 0;

  constructor() {
    makeAutoObservable(this);
  }

  fetchBooks = async (config: QueryConfig) => {
    try {
      const data = await BookService.getByQuery(config);

      console.log(data);
      this.setBooks(data.items);
      this.setTotalLength(data.totalItems);
    } catch (e) {
      console.error(e);
    }
  };

  setBooks = (books: Book[] | null) => {
    this.books = books;
  };

  setTotalLength = (length: number) => {
    this.totalLength = length;
  };
}

const store = new Books();
export const useBooks = () => store;
