import { connect } from 'react-redux';
import EventList from '../components/eventList/eventList';
import { VisibilityFilters, setVisibilityFilter } from '../actions/index';
import eventsData from '../eventsData/eventsData';

const getVisibleEvents = (filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    {
      const localIdArray = (localStorage.getItem('checkedEventList'))
        ? localStorage.getItem('checkedEventList').split(',').map(elem => parseInt(elem, 10))
        : [];
      const currentEventList = [];
      if (localIdArray.length > 0) {
        localIdArray.forEach((eventId) => {
          const currentEvent = eventsData.find(event => event.id === eventId);
          currentEvent.disable = true;
          currentEventList.push(currentEvent);
        });
        eventsData.forEach((event) => {
          if (!currentEventList.find(e => e.id === event.id)) {
            const currentEvent = event;
            currentEvent.disable = false;
            currentEventList.push(currentEvent);
          }
        });
        currentEventList.sort((event, nextEvent) => event.id - nextEvent.id);
      }
      return currentEventList;
    }
    case VisibilityFilters.SHOW_SAVED:
    {
      const localIdArray = (localStorage.getItem('checkedEventList'))
        ? localStorage.getItem('checkedEventList').split(',').map(elem => parseInt(elem, 10))
        : [];
      const savedEventsList = [];
      localIdArray.forEach((elem) => {
        const currentEvent = eventsData.find(event => event.id === elem);
        currentEvent.disable = true;
        savedEventsList.push(currentEvent);
      });
      return savedEventsList;
    }
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  events: getVisibleEvents(state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);
