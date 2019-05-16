import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';

function firebaseInit() {
  const firebaseConfig = {
    apiKey: 'AIzaSyC2lUGqE5-QdrVJlq2pJSBSMZsjIntFu00',
    authDomain: 'sprava-web-app.firebaseapp.com',
    databaseURL: 'https://sprava-web-app.firebaseio.com',
    projectId: 'sprava-web-app',
    storageBucket: 'sprava-web-app.appspot.com',
    messagingSenderId: '1000922505749',
    appId: '1:1000922505749:web:949652bee5fe6c63',
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
}

export default firebaseInit;
