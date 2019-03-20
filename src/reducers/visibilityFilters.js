import { VisibilityFilters } from '../actions/index';

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default visibilityFilter;
