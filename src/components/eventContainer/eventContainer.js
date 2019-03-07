import React from 'react';

import Event from '../event/event';

import eventsList from '../../eventsData/eventsList';

import './eventContainer.scss';

class EventContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      displayData: [],
    };
    this.getSavedEventList.bind(this);
  }

  componentDidMount() {
    this.getSavedEventList();
  }

  getSavedEventList() {
    const savedEventsListId = (localStorage.getItem('checkedEventList'))
      ? localStorage.getItem('checkedEventList').split(',').map(elem => parseInt(elem, 10))
      : eventsList.map(event => parseInt(event.id, 10));
    savedEventsListId.forEach((elem) => {
      const currentEvent = eventsList.find(event => event.id === elem);
      this.setState(prevState => (prevState.displayData.push(currentEvent)));
    });
  }

  render() {
    const { displayData } = this.state;
    return (
      <>
        {displayData.map(event => (
          <Event
            key={event.id}
            id={event.id}
            eventName={event.eventName}
            location={event.location}
            time={event.time}
            description={event.description}
          />
        ))}
      </>
    );
  }
}

export default EventContainer;
