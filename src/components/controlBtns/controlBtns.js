import React from 'react';
import FilterBtns from '../../containers/filterBtn';
import { VisibilityFilters } from '../../actions';
import './controlBtns.scss';

const ControlBtns = () => (
  <>
    <FilterBtns filter={VisibilityFilters.SHOW_ALL}>All</FilterBtns>
    <FilterBtns filter={VisibilityFilters.SHOW_SAVED}>Saved</FilterBtns>
  </>
);

export default ControlBtns;
