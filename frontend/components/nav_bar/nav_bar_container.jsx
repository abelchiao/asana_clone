import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  // pageTitle: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)