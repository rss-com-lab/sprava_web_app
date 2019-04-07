import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Btn from '../components/btn/btn';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter.payload.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Btn);
