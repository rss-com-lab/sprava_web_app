import { connect } from 'react-redux';
import EventList from '../components/eventList/eventList';
import { setVisibilityFilter, itemsFetchData } from '../actions/index';
import { VisibilityFilters } from '../constants/constants';

const getVisibleEvents = (filter, items) => {
  let musicAPI;
  const localIdArray = (localStorage.getItem('checkedEventList'))
    ? localStorage.getItem('checkedEventList').split(',')
    : [];
  const currentEventListExperiment = [];

  if (!(Object.entries(items).length === 0 && items.constructor === Object)) {
    musicAPI = { ...items };
    Object.keys(musicAPI).forEach((day) => { // if haven't saved upload clean list
      Object.keys(musicAPI[day].items).forEach((item) => {
        const customItem = { ...musicAPI[day].items[item] };
        customItem.date = musicAPI[day].date;
        customItem.id = `${item}/date-${(customItem.date).split('')[0]}`;
        customItem.checked = false;
        currentEventListExperiment.push(customItem);
      });
    });
    if (localIdArray.length > 0
      && currentEventListExperiment.length > 0) { // to checked saved events but to initial state
      localIdArray.forEach((eventId) => {
        const currentEvent = currentEventListExperiment // deep copy !!!
          .find(event => event.id === eventId);
        currentEvent.checked = true;
      });
    }
  }

  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
    {
      return currentEventListExperiment;
    }
    case VisibilityFilters.SHOW_SAVED:
    {
      return currentEventListExperiment.filter(event => event.checked === true);
    }
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = state => ({
  events: getVisibleEvents(state.visibilityFilter.payload.filter,
    state.itemsFetchDataSuccess.payload.items),
  items: state.itemsFetchDataSuccess.payload.items,
  hasErrored: state.itemsHasErrored.payload.flag,
  isLoading: state.itemsIsLoading.payload.flag,
});


const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  fetchData: url => dispatch(itemsFetchData(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventList);
