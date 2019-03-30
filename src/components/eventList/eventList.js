import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/event';
import Loading from '../loading/loading';

import './eventList.scss';

class EventList extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('https://cors-anywhere.herokuapp.com/http://spravafestival.by/api/music', { mode: 'cors' });
  }

  render() {
    const {
      events,
      hasErrored,
      isLoading,
    } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="events-section__event-list-container" id="event-list">
        <div className="events-section__first-day-events">
          <h5>4 АВГУСТА</h5>
          <div className="events-section__first-day-events-list">
            {(Object.keys(events)
              .filter(e => events[e].date === '4 АВГУСТА'))
              .map(eventNumber => (
                <Event
                  key={events[eventNumber].id.match(/^\d+/)[0]
                + events[eventNumber].id.match(/\d+$/)[0]}
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
        <div className="events-section__secound-day-events">
          <h5>5 АВГУСТА</h5>
          <div className="events-section__secound-day-events-list">
            {(Object.keys(events)
              .filter(e => events[e].date === '5 АВГУСТА'))
              .map(eventNumber => (
                <Event
                  key={events[eventNumber].id.match(/^\d+/)[0]
              + events[eventNumber].id.match(/\d+$/)[0]}
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
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
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
