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

export const showWarningNotification = (message: string) => {
  showNotification({
    title: 'Warning',
    message,
    styles: () => ({
      root: {
        '&::before': { backgroundColor: 'orange' }
      }
    })
  });
};
