import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Input } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useSearchBooks } from '../hooks/useSearchBooks';

export const SearchForm = observer(() => {
  const { value, onChange, onSubmit } = useSearchBooks();
  return (
    <form onSubmit={onSubmit} className='mt-5'>
      <Input
        value={value}
        onChange={onChange}
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
