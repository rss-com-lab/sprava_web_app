import firebase from 'firebase/app';
import 'firebase/database';

import {
  ACTION_TYPES, ITEMS_STATUS_PARAMS,
  SPRAVA_API_MAIN_URL, CORS_URL, SPRAVA_API_URL,
} from '../constants/constants';
import { FETCH_DATA_INITIAL_STATE } from '../reducers/initialState';

export const itemsStatus = (itemsStatusData, dataSuccess = {}) => ({
  type: ACTION_TYPES.SET_ITEMS_STATUS,
  payload: {
    itemsStatus: itemsStatusData,
    items: dataSuccess,
  },
});

const URL_TO_FETCH_SPRAVA_DATA = `${CORS_URL}/${SPRAVA_API_MAIN_URL}/${SPRAVA_API_URL.music}`;

export const itemsFetchData = () => (dispatch) => {
  const {
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
  } = ITEMS_STATUS_PARAMS;
  dispatch(itemsStatus(ITEMS_IS_LOADING));

  window.fetch(URL_TO_FETCH_SPRAVA_DATA, { cache: 'force-cache' })
    .then((response) => {
      if (!response.ok) {
        console.error(`Oops, something went wrong with response. Error in fetch, response status: ${response.status}`);
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then((items) => {
      const FIREBASE_MESSAGING = firebase.messaging();
      const FIREBASE_DATABASE = firebase.database();
      FIREBASE_MESSAGING.requestPermission()
        .then(() => {
          console.log('Permission granted');
          FIREBASE_DATABASE.ref('/data').update({ ...items });
        })
        .catch(err => console.error(err));
      dispatch(itemsStatus(ITEMS_FETCH_DATA_SUCCESS, items));
    })
    .catch(() => {
      dispatch(itemsStatus(ITEMS_HAS_ERRORED));
    });
};

const reducer = (state = FETCH_DATA_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ITEMS_STATUS:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};


export default reducer;
