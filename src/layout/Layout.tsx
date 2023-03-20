import { PropsWithChildren } from 'react';
import { Footer, Header, Text, Title } from '@mantine/core';

type Props = PropsWithChildren;

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header height='auto' p='sm'>
        <Title weight={700} className='text-center'>
          Search for books
        </Title>
      </Header>
      <main>{children}</main>
      <Footer height='auto' p='sm'>
        <Text weight={500} className='text-center'>
          &copy; 2023
        </Text>
      </Footer>
    </>
  );
};
