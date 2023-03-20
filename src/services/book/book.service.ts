import { BooksResponse, CategoryEnum, SortEnum } from '@/types';

import { instance } from '../api/instance';

export type QueryConfig = {
  query: string;
  category: CategoryEnum;
  orderBy: SortEnum;
};

export const BookService = {
  async getByQuery({ query, category, orderBy: orderBy }: QueryConfig) {
    const { data } = await instance.get<BooksResponse>('/volumes', {
      params: {
        q:
          category !== 'all'
            ? `intitle:"${query}" subject:${category}`
            : `intitle:"${query}"`,
        maxResults: 30,
        orderBy,
        printType: 'books',
        projection: 'full'
      }
    });
    return data;
  }
};
