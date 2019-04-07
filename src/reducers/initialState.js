import { VisibilityFilters } from '../constants/constants';

export const FETCH_DATA_INITIAL_STATE = {
  itemsHasErrored: {
    payload: {
      flag: false,
    },
  },
  itemsIsLoading: {
    payload: {
      flag: false,
    },
  },
  itemsFetchDataSuccess: {
    payload: {
      items: {},
    },
  },
};

export const VISIBILITY_FILTER_INITIAL_STATE = {
  payload: {
    filter: VisibilityFilters.SHOW_ALL,
  },
};
