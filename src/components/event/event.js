import React from 'react';

import PropTypes from 'prop-types';

import './event.scss';

const Event = ({
  eventName, location, time, description,
}) => (
  <div className="events-section__event-container">
    <h4 className="events-section__event-header">{eventName}</h4>
    <div>
      <span className="events-section__event-location">
        {location}
      </span>
      <span className="events-section__event-time">
        {time}
      </span>
    </div>
    <p className="events-section__event-descr">
      {description}
    </p>
  </div>
);

Event.propTypes = {
  eventName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
