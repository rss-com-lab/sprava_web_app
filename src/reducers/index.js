import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilters';
import { items, itemsHasErrored, itemsIsLoading } from './items';

export default combineReducers({
  visibilityFilter,
  items,
  itemsHasErrored,
  itemsIsLoading,
});
