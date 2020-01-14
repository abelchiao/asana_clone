import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../../actions/project_actions';
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)