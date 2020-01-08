import { connect } from 'react-redux';
import UtilBar from './util_bar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(UtilBar)