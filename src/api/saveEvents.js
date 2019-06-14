import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/database';

export default function addEvent() {
  const checkedEventsList = document.querySelectorAll('input[type=checkbox]:checked');
  const idArray = [];

  for (let i = 0; i < checkedEventsList.length; i += 1) {
    idArray.push(checkedEventsList[i].id);
  }
  localStorage.setItem('checkedEventList', idArray);

  const FIREBASE_MESSAGING = firebase.messaging();
  const FIREBASE_DATABASE = firebase.database();
  const requestIndicator = localStorage.getItem('requestIndicator');

  // subscribe user
  if (!requestIndicator) {
    FIREBASE_MESSAGING.getToken()
      .then((token) => {
        FIREBASE_DATABASE.ref('/tokens').orderByChild('token').equalTo(token)
          .once('value')
          .then((childSnapshot) => {
            FIREBASE_DATABASE.ref('/tokens').once('value')
              .then((parentSnapshot) => {
                // don't subscribe user twice
                if (!childSnapshot.val() || !parentSnapshot.val()) {
                  FIREBASE_DATABASE.ref('/tokens').push({ token, eventIdArray: idArray });
                }
              });
          });
      })
      .catch(err => console.error(err));
    localStorage.setItem('requestIndicator', 'asked');
  } else {
    FIREBASE_MESSAGING.getToken()
      .then(token => FIREBASE_DATABASE.ref('/tokens').orderByChild('token').equalTo(token)
        .once('value'))
      .then((snapshot) => {
        const key = Object.keys(snapshot.val())[0]; // get key of token parent
        return FIREBASE_DATABASE.ref('/tokens').child(key).child('eventIdArray').set([...idArray]);
      });
  }
}
