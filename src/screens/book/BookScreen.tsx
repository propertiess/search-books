import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumbs, Grid, Image, Stack, Text } from '@mantine/core';
import { observer } from 'mobx-react-lite';

import NoImageAvailable from '@/assets/no-image-available.png';
import { A } from '@/components/A';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useBooksStore } from '@/store/books';

export const BookScreen = observer(() => {
  const navigate = useNavigate();
  const { activeBook, setActiveBook } = useBooksStore();

  useScrollToTop();

  useEffect(() => {
    if (activeBook !== null) {
      return;
    }

    navigate('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack my='md'>
      <Breadcrumbs>
        <A href='/' onClick={() => setActiveBook(null)}>
          Home
        </A>
        <A href='#'>Book Details</A>
      </Breadcrumbs>
      <Grid my='md'>
        <Grid.Col span={12} sm={3} className='bg-gray-800'>
          <Stack className='h-full w-full items-center justify-center'>
            {activeBook?.imageLinks?.smallThumbnail ? (
              <Image
                className='cursor-pointer'
                src={activeBook?.imageLinks?.smallThumbnail}
                width='8rem'
                height='10rem'
                alt={activeBook.title}
              />
            ) : (
              <Image
                className='cursor-pointer'
                src={NoImageAvailable}
                width='10rem'
                height='10rem'
                alt={activeBook?.title}
              />
            )}
          </Stack>
        </Grid.Col>
        <Grid.Col span={12} sm={8} className='md:ml-5'>
          {activeBook?.categories && (
            <Text>{activeBook?.categories.join(', ')}</Text>
          )}
          <Text className='text-2xl font-bold'>{activeBook?.title}</Text>
          {activeBook?.authors && <Text>{activeBook?.authors.join(', ')}</Text>}
          <Text mt='md'>{activeBook?.description}</Text>
        </Grid.Col>
      </Grid>
    </Stack>
  );
});
