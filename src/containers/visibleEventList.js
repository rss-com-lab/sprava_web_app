import { connect } from 'react-redux';
import EventList from '../components/eventList/eventList';
import { VisibilityFilters, setVisibilityFilter } from '../actions/index';
import eventsData from '../eventsData/eventsData';

const getVisibleEvents = (filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return eventsData;
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
