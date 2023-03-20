import { makeAutoObservable } from 'mobx';

import { BookService, QueryConfig } from '@/services/book/book.service';
import { Book } from '@/types';

class Books {
  books: Book[] = [];
  totalLength = 0;

  constructor() {
    makeAutoObservable(this);
  }

  private fetchBooks = async (config: QueryConfig) => {
    try {
      const data = await BookService.getByQuery(config);
      this.setTotalLength(data.totalItems);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  searchBooks = async (config: QueryConfig) => {
    const data = await this.fetchBooks(config);
    data?.items && this.setBooks(data?.items);
  };

  loadMoreBooks = async (config: QueryConfig) => {
    const data = await this.fetchBooks(config);
    if (data?.items) {
      this.books = [...this.books, ...data.items];
    }
  };

  setBooks = (books: Book[]) => {
    this.books = books;
  };

  setTotalLength = (length: number) => {
    this.totalLength = length;
  };

  get length() {
    return this.books.length;
  }
}

const store = new Books();
export const useBooks = () => store;
