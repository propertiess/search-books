import { Text } from '@mantine/core';

import { Layout } from '@/layout/Layout';

export const NotFound = () => {
  return (
    <Layout>
      <Text className='mt-3 text-center text-lg font-semibold'>
        Page not found!
      </Text>
    </Layout>
  );
};
