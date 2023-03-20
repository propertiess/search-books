import { Breadcrumbs, Stack } from '@mantine/core';

import { A } from '@/components/A';

export const BookScreen = () => {
  return (
    <Stack mt='md'>
      <Breadcrumbs>
        <A href='/'>Главная</A>
        <A href='#'>Подробная информация</A>
      </Breadcrumbs>
    </Stack>
  );
};
