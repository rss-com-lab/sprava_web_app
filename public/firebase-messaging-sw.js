importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.2/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQvKgaueZ0_jurnxP4pC-1LoGM8CdwQRM",
  authDomain: "sprava-app-78962.firebaseapp.com",
  databaseURL: "https://sprava-app-78962.firebaseio.com",
  projectId: "sprava-app-78962",
  storageBucket: "sprava-app-78962.appspot.com",
  messagingSenderId: "1056885498492",
  appId: "1:1056885498492:web:92940cc924ea5e0f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const CACHE_NAME = 'sprava-app-cache';
const CACHE_ERROR_MESSAGES = 'sprava-app-cache-error'
const urlsToCache = [
  './',
  './asset-manifest.json',
  './index.html',
  './firebase-messaging-sw.js',
  './manifest.json',
  './precache-manifest.47dc9422c611376f1c062d8e52a7dd86.js',
  './swRegister.js',
  './icons/sprava-logo-128x128.png',
  './static/css/main.bc322f13.chunk.css',
  './static/js/2.2f1d7e20.chunk.js',
  './static/js/main.15e483f3.chunk.js',
  './static/js/runtime~main.50b15079.js',
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

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      return response || fetch(event.request);
    })
    .catch(err => console.error(err))
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        ))
      .catch(err => console.error(err))
  );
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  const PAGE_URL = 'https://sprava-app-78962.firebaseapp.com/';
  const promiseChain = clients.openWindow(PAGE_URL);
  event.waitUntil(promiseChain);
});
