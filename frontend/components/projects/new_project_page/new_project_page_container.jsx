import { connect } from 'react-redux';
import NewProjectPage from './new_project_page';
import { createProject } from '../../../actions/project_actions';
import { createProjectMembership } from '../../../util/project_api_util';

const mapStateToProps = state => ({
  ownerId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project)),
  createProjectMembership: (project_membership) => {
    return createProjectMembership(project_membership)
  }
  // createProjectMembership: project => dispatch(createProjectMembership(project.owner_id, project.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage)