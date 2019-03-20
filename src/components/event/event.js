import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Checkbox from '../checkbox/checkbox';
import saveEvents from '../../api/saveEvents';

import './event.scss';

const Event = ({
  id, eventName, location, time, description, isEventSave,
}) => (
  <div className="events-section__event-container" id={id}>
    <div className="events-section__event-data">
      <h4 className="event-data__event-header">{eventName}</h4>
      <div className="event-data__time-location">
        <div className="event-data__event-location">
          {location}
        </div>
        <span className="event-data__event-time">
          {time}
        </span>
      </div>
      <p className="event-data__event-descr">
        {description}
      </p>
    </div>
    <div className="events-section__event-checkbox">
      <Checkbox label="Выбрать" isSaved={isEventSave} handleCheckboxChange={saveEvents} id={cn(`choose-event-${id}`)} />
    </div>
  </div>
);

Event.propTypes = {
  id: PropTypes.number.isRequired,
  eventName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isEventSave: PropTypes.bool.isRequired,
};

export default Event;
