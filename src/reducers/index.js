import { combineReducers } from 'redux';
import visibilityFilter from '../actions/filter';
import itemsStatus from '../actions/apiFetch';

export default combineReducers({
  visibilityFilter,
  itemsStatus,
});
