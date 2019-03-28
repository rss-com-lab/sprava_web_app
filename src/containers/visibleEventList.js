import { connect } from 'react-redux';
import EventList from '../components/eventList/eventList';
import { VisibilityFilters, setVisibilityFilter } from '../actions/index';
import musicAPI from '../eventsData/musicAPI';
// import fetchData from '../api/fetchData';

const getVisibleEvents = (filter) => {
  // console.log(fetchData('music', { mode: 'no-cors' }));
  const localIdArray = (localStorage.getItem('checkedEventList'))
    ? localStorage.getItem('checkedEventList').split(',')
    : [];
  const currentEventListExperiment = [];
  Object.keys(musicAPI).forEach((day) => { // if haven't saved upload clean list
    Object.keys(musicAPI[day].items).forEach((item) => {
      const customItem = { ...musicAPI[day].items[item] };
      customItem.date = musicAPI[day].date;
      customItem.id = `${item}/date-${(customItem.date).split('')[0]}`;
      customItem.checked = false;
      currentEventListExperiment.push(customItem);
    });
  });
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    {
      if (localIdArray.length > 0) { // to checked saved events
        localIdArray.forEach((eventId) => {
          const currentEvent = currentEventListExperiment // deep copy !!!
            .find(event => event.id === eventId);
          currentEvent.checked = true;
        });
      }
      return currentEventListExperiment;
    }
    case VisibilityFilters.SHOW_SAVED:
    {
      if (localIdArray.length > 0) {
        localIdArray.forEach((eventId) => {
          const currentEvent = currentEventListExperiment
            .find(event => event.id === eventId);
          currentEvent.checked = true;
        });
      }
      return currentEventListExperiment.filter(event => event.checked === true);
    }
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  events: getVisibleEvents(state.visibilityFilter.filter),
});

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);
