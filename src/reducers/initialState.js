import { VisibilityFilters, ITEMS_STATUS_PARAMS } from '../constants/constants';

export const FETCH_DATA_INITIAL_STATE = {
  payload: {
    itemsStatus: ITEMS_STATUS_PARAMS.ITEMS_IS_LOADING,
    items: {},
  },
};

export const VISIBILITY_FILTER_INITIAL_STATE = {
  payload: {
    filter: VisibilityFilters.SHOW_ALL,
  },
};
