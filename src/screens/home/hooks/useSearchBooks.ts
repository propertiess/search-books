import { ChangeEvent, FormEvent, useState } from 'react';

import { useBookSearchStore } from '@/store/book-search';
import { useBooksStore } from '@/store/books';
import { showErrorNotification } from '@/utils/helpers/notifications';

export const useSearchBooks = () => {
  const { query, setQuery, category, orderBy } = useBookSearchStore();
  const { searchBooks } = useBooksStore();

  const [value, setValue] = useState(() => query);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(value);

    if (!value.trim()) {
      showErrorNotification('Write book for search');
      return;
    }

    searchBooks({
      query: value,
      category,
      orderBy: orderBy
    });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    onSubmit
  };
};
