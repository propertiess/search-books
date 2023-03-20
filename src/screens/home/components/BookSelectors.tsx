import { Group, Select } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useBookSearchStore } from '@/store/book-search';
import { CategoryEnum, SortEnum } from '@/types';
import { CATEGORIES, SORTS } from '@/utils/consts';

export const BookSelectors = observer(() => {
  const { category, orderBy, setCategory, setOrderBy } = useBookSearchStore();

  return (
    <Group mt='md'>
      <Select
        label='Categories'
        data={CATEGORIES}
        value={category}
        onChange={val => setCategory(val as CategoryEnum)}
      />
      <Select
        label='Sorting by'
        data={SORTS}
        value={orderBy}
        onChange={val => setOrderBy(val as SortEnum)}
      />
    </Group>
  );
});
