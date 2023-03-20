import { useNavigate } from 'react-router-dom';
import { Card, Flex, Image, Text, Tooltip } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import NoImageAvailable from '@/assets/no-image-available.png';
import { useBooksStore } from '@/store/books';
import { VolumeInfo } from '@/types';

type Props = {
  book: VolumeInfo;
};

const MAX_LENGTH = 25;

export const BookCard = observer(({ book }: Props) => {
  const { setActiveBook } = useBooksStore();
  const navigate = useNavigate();

  const onClickHandler = () => {
    setActiveBook(book);
    navigate('/book-details');
  };

  return (
    <Card className='h-full cursor-pointer' onClick={onClickHandler}>
      <Flex justify='center' p='sm'>
        {book?.imageLinks?.smallThumbnail ? (
          <Image
            src={book?.imageLinks?.smallThumbnail}
            width='8rem'
            height='10rem'
            alt={book.title}
          />
        ) : (
          <Image
            src={NoImageAvailable}
            width='10rem'
            height='10rem'
            alt={book.title}
          />
        )}
      </Flex>
      <Text my='md'>{book.categories?.[0]}</Text>
      {book.title.length > MAX_LENGTH ? (
        <Tooltip label={book.title} withinPortal={true}>
          <Text component='h4'>{book.title.slice(0, MAX_LENGTH) + '...'}</Text>
        </Tooltip>
      ) : (
        <Text component='h4'>{book.title}</Text>
      )}
      {book.authors && <Text>{book.authors.join(', ')}</Text>}
    </Card>
  );
});
