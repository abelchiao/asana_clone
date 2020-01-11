import { connect } from 'react-redux';
import RecentProjectIndex from './recent_project_index';
import { fetchProjects } from '../../../actions/project_actions';
import { fetchAssociatedProjects } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  projects: fetchAssociatedProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentProjectIndex);