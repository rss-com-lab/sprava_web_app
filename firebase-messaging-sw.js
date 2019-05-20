importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
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
