import { Center, Grid, Loader } from '@mantine/core';

import { Book } from '@/types';

import { BookCard } from './BookCard';

type Props = {
  books: Book[];
  isLoading: boolean;
};

export const BookList = ({ books, isLoading }: Props) => (
  <>
    <Grid my='md'>
      {books?.map(({ volumeInfo, id }) => (
        <Grid.Col span={12} xs={6} sm={4} xl={2} key={id}>
          <BookCard book={volumeInfo} />
        </Grid.Col>
      ))}
    </Grid>
    {isLoading && !books.length && (
      <Center mt='md'>
        <Loader />
      </Center>
    )}
  </>
);
