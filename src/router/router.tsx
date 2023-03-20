import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layout/Layout';
import { BookScreen, HomeScreen } from '@/screens';
import { NotFound } from '@/screens/404';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomeScreen />
      },
      {
        path: '/book-details',
        element: <BookScreen />
      }
    ]
  }
]);
