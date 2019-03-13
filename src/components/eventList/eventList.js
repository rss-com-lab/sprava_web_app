import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/event';

import './eventList.scss';

const EventList = ({ events }) => (
  <div className="events-section__event-list">
    {events.map(e => (
      <Event
        key={e.id}
        id={e.id}
        eventName={e.eventName}
        location={e.location}
        time={e.time}
        description={e.description}
        checkboxHidden={Boolean(e.disable)}
      />
    ))}
  </div>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};


export default EventList;
