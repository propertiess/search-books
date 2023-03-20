import { Card, Flex, Image, Text, Tooltip } from '@mantine/core';

import NoImageAvailable from '@/assets/no-image-available.png';
import { VolumeInfo } from '@/types';

type Props = {
  book: VolumeInfo;
};

export const BookCard = ({ book }: Props) => {
  return (
    <Card className='h-full'>
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
            width='8rem'
            height='10rem'
            alt={book.title}
          />
        )}
      </Flex>
      <Text my='md'>{book.categories?.[0]}</Text>
      {book.title.length > 47 ? (
        <Tooltip label={book.title}>
          <Text component='h4'>{book.title.slice(0, 47) + '...'}</Text>
        </Tooltip>
      ) : (
        <Text component='h4'>{book.title}</Text>
      )}
      {book.authors && <Text>{book.authors.join(', ')}</Text>}
    </Card>
  );
};
