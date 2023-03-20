import { FormEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useBookSearch } from '@/store/book-search';
import { useBooks } from '@/store/books';

export const SearchForm = observer(() => {
  const { query, setQuery, category, orderBy } = useBookSearch();
  const { searchBooks } = useBooks();
  const [value, setValue] = useState(() => query);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(value);
    searchBooks({
      query: value,
      category,
      orderBy: orderBy
    });
  };

  return (
    <form onSubmit={onSubmit} className='mt-5'>
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        type='search'
        rightSection={
          <button
            className='bg cursor-pointer border-0 bg-transparent'
            type='submit'
          >
            <MagnifyingGlassIcon width={25} height={25} />
          </button>
        }
      />
    </form>
  );
});
