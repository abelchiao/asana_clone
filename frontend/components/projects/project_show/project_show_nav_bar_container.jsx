import { connect } from 'react-redux';
import ProjectShowNavBar from './project_show_nav_bar';
import { logout } from '../../../actions/session_actions';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowNavBar)