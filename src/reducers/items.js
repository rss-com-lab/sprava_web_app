import { FETCH_DATA_INITIAL_STATE } from './initialState';

export function itemsHasErrored(state =
FETCH_DATA_INITIAL_STATE.itemsHasErrored, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export function itemsIsLoading(state =
FETCH_DATA_INITIAL_STATE.itemsIsLoading, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}

export function itemsFetchDataSuccess(state =
FETCH_DATA_INITIAL_STATE.itemsFetchDataSuccess, action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
}
