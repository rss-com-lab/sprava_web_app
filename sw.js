const CACHE_NAME = 'sprava-app-cache';
const CACHE_ERROR_MESSAGES = 'sprava-app-cache-error'
const urlsToCache = [
  './sprava_web_app/',
  './sprava_web_app/asset-manifest.json',
  './sprava_web_app/index.html',
  './sprava_web_app/manifest.json',
  './sprava_web_app/precache-manifest.47dc9422c611376f1c062d8e52a7dd86.js',
  './sprava_web_app/swRegister.js',
  './sprava_web_app/icons/sprava-logo-128x128.png',
  './sprava_web_app/static/css/main.bc322f13.chunk.css',
  './sprava_web_app/static/js/2.2f1d7e20.chunk.js',
  './sprava_web_app/static/js/main.15e483f3.chunk.js',
  './sprava_web_app/static/js/runtime~main.50b15079.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.filter(function(cacheName) {
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        ))
      .catch(err => console.error(err))
  );
});
