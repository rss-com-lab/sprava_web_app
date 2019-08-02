if ('serviceWorker' in navigator && 'Notification' in window && 'PushManager' in window) {
  console.log('Service Worker and Notifications is supported');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((registration) => {
        console.log('Service Worker is registered', registration.scope);
      })
      .catch((error) => {
        console.error('Service Worker Error', error);
      });
  });
} else {
  console.warn('Notification is not supported');
}
