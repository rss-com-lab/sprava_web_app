import React from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import Checkbox from '../checkbox/checkbox';

import saveEvents from '../../api/saveEvents';

import './event.scss';

const Event = ({
  id, eventName, location, time, description,
}) => (
  <div className="events-section__event-container" id={id}>
    <div className="events-section__event-checkbox">
      <Checkbox label="Выбрать" handleCheckboxChange={saveEvents} id={cn(`choose-event-${id}`)} />
    </div>
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
  id: PropTypes.number.isRequired,
  eventName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
