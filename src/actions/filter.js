import { VISIBILITY_FILTER_INITIAL_STATE } from '../reducers/initialState';
import { ACTION_TYPES } from '../constants/constants';

export const setVisibilityFilter = filter => ({
  type: ACTION_TYPES.SET_VISIBILITY_FILTER,
  payload: {
    filter,
  },
});

export const reducer = (state =
VISIBILITY_FILTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_VISIBILITY_FILTER:
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
