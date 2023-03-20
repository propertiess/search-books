import { useEffect } from 'react';
import { Group, Select } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useBookSearch } from '@/store/book-search';
import { useBooks } from '@/store/books';
import { CategoryEnum, SortEnum } from '@/types';
import { CATEGORIES, SORTS } from '@/utils/consts';

export const BookSelectors = observer(() => {
  const { category, orderBy, setCategory, setOrderBy, query } = useBookSearch();
  const { searchBooks } = useBooks();

  useEffect(() => {
    if (!query) {
      return;
    }

    searchBooks({
      query,
      category,
      orderBy
    });
  }, [category, orderBy, query, searchBooks]);

  return (
    <Group mt='md'>
      <Select
        data={CATEGORIES}
        value={category}
        onChange={val => setCategory(val as CategoryEnum)}
      />
      <Select
        data={SORTS}
        value={orderBy}
        onChange={val => setOrderBy(val as SortEnum)}
      />
    </Group>
  );
});
