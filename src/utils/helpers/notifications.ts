import { showNotification } from '@mantine/notifications';

export const showErrorNotification = (message: string) => {
  showNotification({
    title: 'Error',
    message,
    styles: () => ({
      root: {
        '&::before': { backgroundColor: 'red' }
      }
    })
  });
};
