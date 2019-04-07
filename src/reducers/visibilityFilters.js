import { VISIBILITY_FILTER_INITIAL_STATE } from './initialState';

const visibilityFilter = (state =
VISIBILITY_FILTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
