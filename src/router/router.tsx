import { createBrowserRouter } from 'react-router-dom';

import { HomeScreen } from '@/screens';

export const router = createBrowserRouter([
  {
    element: <HomeScreen />,
    path: '/'
  }
]);
