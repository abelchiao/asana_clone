import { connect } from 'react-redux';
import EditProjectForm from './edit_project_form';
import { updateProject } from '../../../actions/project_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  ownerId: state.session.id,
  // project: state.entities.projects[ownProps.match.params.projectId],
  project: {
    title: '',
    description: ''
  }
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  updateProject: project => dispatch(updateProject(project)),
  // closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm);