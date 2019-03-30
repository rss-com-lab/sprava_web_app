import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import Checkbox from '../checkbox/checkbox';
import saveEvents from '../../api/saveEvents';

import './event.scss';

const Event = ({
  img, title, schedule, link, isEventSave, id,
}) => (
  <div className="events-section__event-container">
    <h4 className="event-data__event-header">
      {Parser(title)}
    </h4>
    <div className="events-section__event-data">
      <div className="events-section__event-img">
        {/* <img src={img} alt={`${title} preview`} /> */}
        <img src="http://www.troitsa.net/templates/rhuk_solarflare_ii/new_Footer_2017_1.jpg" alt={`${title} preview`} />
      </div>
      <div className="events-sevtion__schedule">
        {Object.keys(schedule).map(eventParam => (
          <div className="events-section__event-params">
            <h5 className="events-section__event-location">{schedule[eventParam].point}</h5>
            <p className="events-section__time">
              {schedule[eventParam].timeStart}
            -
              {schedule[eventParam].timeEnd}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="event-data__group-link-container">
      <a href={link} className="event-data__group-link">Сайт группы</a>
    </div>
    <div className="events-section__event-checkbox">
      <Checkbox label="Выбрать" isSaved={isEventSave} id={id} handleCheckboxChange={saveEvents} />
    </div>
  </div>
);

Event.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  schedule: PropTypes.objectOf(PropTypes.shape({
    point: PropTypes.string.isRequired,
    timeStart: PropTypes.string.isRequired,
    timeEnd: PropTypes.string.isRequired,
  })).isRequired,
  link: PropTypes.string.isRequired,
  isEventSave: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Event;
