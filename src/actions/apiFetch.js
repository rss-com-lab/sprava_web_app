import 'whatwg-fetch';
import { ACTION_TYPES, ITEMS_STATUS_PARAMS } from '../constants/constants';
import { FETCH_DATA_INITIAL_STATE } from '../reducers/initialState';

export const itemsStatus = (itemsStatusData, dataSuccess = {}) => ({
  type: ACTION_TYPES.SET_ITEMS_STATUS,
  payload: {
    itemsStatus: itemsStatusData,
    items: dataSuccess,
  },
});

export const itemsFetchData = url => (dispatch) => {
  const {
    ITEMS_HAS_ERRORED,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS,
  } = ITEMS_STATUS_PARAMS;
  dispatch(itemsStatus(ITEMS_IS_LOADING));

  window.fetch(url, { cache: 'force-cache' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(response => response.json())
    .then((items) => {
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
