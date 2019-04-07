import 'whatwg-fetch';

// action filters

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  payload: {
    filter,
  },
});

// action creators

export const itemsHasErrored = bool => ({
  type: 'ITEMS_HAS_ERRORED',
  payload: {
    flag: bool,
  },
});

export const itemsIsLoading = bool => ({
  type: 'ITEMS_IS_LOADING',
  payload: {
    flag: bool,
  },
});

export const itemsFetchDataSuccess = items => ({
  type: 'ITEMS_FETCH_DATA_SUCCESS',
  payload: {
    items,
  },
});

export const itemsFetchData = url => (dispatch) => {
  dispatch(itemsIsLoading(true));

  window.fetch(url, { cache: 'force-cache' })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(itemsIsLoading(false));

      return response;
    })
    .then(response => response.json())
    .then(items => dispatch(itemsFetchDataSuccess(items)))
    .catch(() => dispatch(itemsHasErrored(true)));
};
