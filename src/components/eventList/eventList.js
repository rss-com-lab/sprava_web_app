import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Event from '../event/event';
import Loading from '../loading/loading';
import RequestField from '../requestField/requestField';
import {
  SPRAVA_API_MAIN_URL, CORS_URL, SPRAVA_API_URL, ITEMS_STATUS_PARAMS,
} from '../../constants/constants';
import FESTIVAL_DAYS from '../../app-config/app-config';
import './eventList.scss';

class EventList extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData(`${CORS_URL}/${SPRAVA_API_MAIN_URL}/${SPRAVA_API_URL.music}`);
  }

  render() {
    const {
      events,
      fetchStatus,
    } = this.props;
    if (fetchStatus === ITEMS_STATUS_PARAMS.ITEMS_HAS_ERRORED) {
      return <RequestField />;
    }

    if (fetchStatus === ITEMS_STATUS_PARAMS.ITEMS_IS_LOADING) {
      return <Loading />;
    }

    return (
      <div className="events-section__event-list-container" id="event-list">
        <div
          className="events-section__first-day-events"
          style={(Object.keys(events)
            .filter(e => events[e].date === `${FESTIVAL_DAYS.FIRST_DAY}`).length > 0)
            ? { display: 'block' } : { display: 'none' }}
        >
          <h5 className="events-section__day-title">{FESTIVAL_DAYS.FIRST_DAY}</h5>
          <div className="events-section__first-day-events-list">
            {(Object.keys(events)
              .filter(e => events[e].date === `${FESTIVAL_DAYS.FIRST_DAY}`))
              .map(eventNumber => (
                <Event
                  key={uniqid()}
                  img={events[eventNumber].img}
                  title={events[eventNumber].title}
                  schedule={events[eventNumber].schedule}
                  link={events[eventNumber].link}
                  id={events[eventNumber].id}
                  isEventSave={Boolean(events[eventNumber].checked)}
                />
              ))}
          </div>
        </div>
        <div
          className="events-section__secound-day-events"
          style={(Object.keys(events)
            .filter(e => events[e].date === `${FESTIVAL_DAYS.SECOUND_DAY}`).length > 0)
            ? { display: 'block' } : { display: 'none' }}
        >
          <h5 className="events-section__day-title">{FESTIVAL_DAYS.SECOUND_DAY}</h5>
          <div className="events-section__secound-day-events-list">
            {(Object.keys(events)
              .filter(e => events[e].date === `${FESTIVAL_DAYS.SECOUND_DAY}`))
              .map(eventNumber => (
                <Event
                  key={uniqid()}
                  img={events[eventNumber].img}
                  title={events[eventNumber].title}
                  schedule={events[eventNumber].schedule}
                  link={events[eventNumber].link}
                  id={events[eventNumber].id}
                  isEventSave={Boolean(events[eventNumber].checked)}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

EventList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  fetchStatus: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    schedule: PropTypes.objectOf(PropTypes.shape({
      point: PropTypes.string.isRequired,
      timeStart: PropTypes.string.isRequired,
      timeEnd: PropTypes.string.isRequired,
    })).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default EventList;
