importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC2lUGqE5-QdrVJlq2pJSBSMZsjIntFu00",
  authDomain: "sprava-web-app.firebaseapp.com",
  databaseURL: "https://sprava-web-app.firebaseio.com",
  projectId: "sprava-web-app",
  storageBucket: "sprava-web-app.appspot.com",
  messagingSenderId: "1000922505749",
  appId: "1:1000922505749:web:949652bee5fe6c63"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

self.addEventListener('notificationclick', (event) => {
  if (event.action) {
    clients.openWindow(event.action);
  }
  alert('notificationclick');
  event.notification.close();
});
