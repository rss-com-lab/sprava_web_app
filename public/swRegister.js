if ('serviceWorker' in navigator && 'Notification' in window && 'PushManager' in window) {
  console.log('Service Worker and Notifications is supported');

  navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then(() => {
      console.log('Service Worker is registered');
    })
    .catch((error) => {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Notification is not supported');
}
