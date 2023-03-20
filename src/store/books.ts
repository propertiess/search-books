import { AxiosError } from 'axios';
import { makeAutoObservable } from 'mobx';

import { BookService, QueryConfig } from '@/services/book/book.service';
import { Book, VolumeInfo } from '@/types';
import { showErrorNotification } from '@/utils/helpers/notifications';

class Books {
  books: Book[] = [];
  activeBook: VolumeInfo | null = null;
  totalLength = 0;

  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  private fetchBooks = async (config: QueryConfig) => {
    this.setIsLoading(true);

    try {
      const data = await BookService.getByQuery(config);
      this.setTotalLength(data.totalItems);
      this.setIsLoading(false);

      return data;
    } catch (e) {
      if (e instanceof Error || e instanceof AxiosError) {
        showErrorNotification(e.message);
      }
      console.error(e);
    }

    this.setIsLoading(false);
  };

  searchBooks = async (config: QueryConfig) => {
    const data = await this.fetchBooks(config);
    data?.items && this.setBooks(data.items);
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

  setActiveBook = (book: VolumeInfo | null) => {
    this.activeBook = book;
  };

  get length() {
    return this.books.length;
  }
}

const store = new Books();
export const useBooks = () => store;
