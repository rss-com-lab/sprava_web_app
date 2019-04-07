import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilters';
import { itemsFetchDataSuccess, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
  visibilityFilter,
  itemsFetchDataSuccess,
  itemsHasErrored,
  itemsIsLoading,
});
