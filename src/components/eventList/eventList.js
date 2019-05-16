import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import Event from '../event/event';
import Loading from '../loading/loading';
import RequestField from '../requestFailed/requestFailed';
import { ITEMS_STATUS_PARAMS } from '../../constants/constants';
import FESTIVAL_DAYS from '../../app-config/app-config';
import './eventList.scss';

class EventList extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const {
      events,
      fetchStatus,
    } = this.props;

    switch (fetchStatus) {
      case ITEMS_STATUS_PARAMS.ITEMS_HAS_ERRORED: // fetch failed
        return <RequestField />;

      case ITEMS_STATUS_PARAMS.ITEMS_IS_LOADING: // loading
        return <Loading />;

      default: // fetch success
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

                      // notifications worker
                      {...setInterval(() => {
                        const event = events[eventNumber].schedule;
                        const { title } = events[eventNumber];
                        const schedule = Object.keys(event);
                        const currentDate = new Date();
                        currentDate.setSeconds(0);

                        schedule.forEach((eventShedule) => {
                          const eventDate = new Date();
                          const hours = (event[eventShedule].timeStart).match(/^\w+/g);
                          const minutes = (event[eventShedule].timeStart).match(/\w+$/g);
                          const location = event[eventShedule].point;
                          eventDate.setHours(hours, minutes, 0);

                          if (eventDate.getTime() === currentDate.getTime()) {
                            navigator.serviceWorker.ready.then((registration) => {
                              registration.showNotification(title, {
                                body: `${title} скоро начнет свое выступление. Место выступления: ${location}`,
                                icon: './icons/sprava_logo-192x192.png',
                                badge: './icons/sprava-log-badge-128x128.png',
                                image: `http://spravafestival.by/${events[eventNumber].img}`,
                              });
                            });
                          }
                        });
                      }, 60000)}
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
