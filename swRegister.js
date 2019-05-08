/* eslint-disable no-console */
if ('serviceWorker' in navigator && 'Notification' in window) {
  console.log('Service Worker and Notifications is supported');

  navigator.serviceWorker.register('./service-worker.js')
    .then(() => {
      console.log('Service Worker is registered');
    })
    .catch((error) => {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Notification is not supported');
}

if (window.Notification && Notification.permission !== 'denied') {
  Notification.requestPermission((status) => {
    switch (status) {
      case 'granted':
        console.log('Permision granted, notifications allowed');
        break;
      case 'denied':
        console.log('Permission wasn\'t granted. Allow a retry.');
        break;
      case 'default':
        console.log('The permission request was dismissed.');
        break;
      default:
        break;
    }
  });
}
