import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';

export default function addEvent() {
  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();

  const checkedEventsList = document.querySelectorAll('input[type=checkbox]:checked');
  const requestIndicator = localStorage.getItem('requestIndicator');

  if (!requestIndicator) {
    FIREBASE_MESSAGING.requestPermission()
      .then(() => FIREBASE_MESSAGING.getToken())
      .then((token) => {
        FIREBASE_DATABASE.ref('/tokens').push({
          token,
        });
      })
      .catch(err => console.error(err));
    localStorage.setItem('requestIndicator', 'asked');
  }

  const idArray = [];
  for (let i = 0; i < checkedEventsList.length; i += 1) {
    idArray.push(checkedEventsList[i].id);
  }
  localStorage.setItem('checkedEventList', idArray);
}
