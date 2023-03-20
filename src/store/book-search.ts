import { makeAutoObservable } from 'mobx';

import { CategoryEnum, SortEnum } from '@/types';

class BookSearch {
  query = '';
  category: CategoryEnum = CategoryEnum.ALL;
  orderBy: SortEnum = SortEnum.RELEVANCE;

  constructor() {
    makeAutoObservable(this);
  }

  setQuery = (q: string) => {
    this.query = q;
  };

  setCategory = (c: CategoryEnum) => {
    this.category = c;
  };

  setOrderBy = (sort: SortEnum) => {
    this.orderBy = sort;
  };
}

const store = new BookSearch();
export const useBookSearchStore = () => store;
