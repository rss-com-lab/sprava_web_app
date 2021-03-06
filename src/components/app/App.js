import React from 'react';
import VisibleEventsList from '../../containers/visibleEventList';
import ControlBtns from '../controlBtns/controlBtns';
import './App.scss';

const App = () => (
  <div className="App">
    <ControlBtns />
    <VisibleEventsList />
  </div>
);

export default App;
