import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = { visibilityFilter: VisibilityFilters.SHOW_ALL }, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { visibilityFilter: action.filter };
    default:
      return state;
  }
};

export default visibilityFilter;
