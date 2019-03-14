import { connect } from 'react-redux';
import EventList from '../components/eventList/eventList';
import { VisibilityFilters, setVisibilityFilter } from '../actions/index';
import eventsData from '../eventsData/eventsData';

const getVisibleEvents = (filter) => {
  const localIdArray = (localStorage.getItem('checkedEventList'))
    ? localStorage.getItem('checkedEventList').split(',').map(elem => parseInt(elem, 10))
    : [];
  let currentEventList = [];
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    {
      if (localIdArray.length > 0) { // to checked saved events
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
      } else {
        currentEventList = eventsData.slice(); // if haven't saved upload clean list
      }
      return currentEventList;
    }
    case VisibilityFilters.SHOW_SAVED:
    {
      localIdArray.forEach((elem) => { // show only saved events
        const currentEvent = eventsData.find(event => event.id === elem);
        currentEvent.disable = true;
        currentEventList.push(currentEvent);
      });
      return currentEventList;
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
