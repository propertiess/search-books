import { Button, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import { useBookSearchStore } from '@/store/book-search';
import { useBooksStore } from '@/store/books';

import { BookList } from './components/BookList';
import { BookSelectors } from './components/BookSelectors';
import { SearchForm } from './components/SearchForm';

export const HomeScreen = observer(() => {
  const { books, totalLength, length, loadMoreBooks, isLoading } =
    useBooksStore();
  const { query, category, orderBy } = useBookSearchStore();

  const onLoadMore = () => {
    loadMoreBooks({
      query,
      category,
      orderBy,
      startIndex: length
    });
  };

  return (
    <>
      <SearchForm />
      <BookSelectors />
      {!!totalLength && (
        <Text className='mt-2 text-center font-medium'>
          {totalLength} book(s) found
        </Text>
      )}
      <BookList books={books} isLoading={isLoading} />
      {totalLength !== length && (
        <Button
          className='block'
          ml='auto'
          mb='md'
          onClick={onLoadMore}
          loading={isLoading}
          disabled={isLoading}
        >
          Load more
        </Button>
      )}
    </>
  );
});
