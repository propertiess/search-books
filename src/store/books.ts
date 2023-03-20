import { makeAutoObservable } from 'mobx';

import { BookService, QueryConfig } from '@/services/book/book.service';
import { Book } from '@/types';

class Books {
  books: Book[] = [];
  totalLength = 0;
  isLoading = false;
  isError: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  private fetchBooks = async (config: QueryConfig) => {
    this.setIsLoading(true);
    this.setIsError(null);
    try {
      const data = await BookService.getByQuery(config);
      this.setTotalLength(data.totalItems);
      this.setIsLoading(false);

      return data;
    } catch (e) {
      e instanceof Error && this.setIsError(e);

      console.error(e);
    }
    this.setIsLoading(false);
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

  setIsLoading = (loading: boolean) => {
    this.isLoading = loading;
  };

  setIsError = (error: Error | null) => {
    this.isError = error;
  };

  get length() {
    return this.books.length;
  }
}

const store = new Books();
export const useBooks = () => store;
