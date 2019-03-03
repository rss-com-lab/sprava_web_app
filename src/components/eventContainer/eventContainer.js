import React from 'react';

import Event from '../event/event';

import eventsList from '../../eventsData/eventsList';

import './eventContainer.scss';

class EventContainer extends React.Component {
  constructor() {
    super();
    this.displayData = [];
  }

  render() {
    return (
      <>
        {eventsList.map(event => (
          <Event
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
