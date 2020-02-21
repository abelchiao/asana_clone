import { connect } from 'react-redux';
import SideBarProjectIndex from './side_bar_project_index';
import { fetchProjects, deleteProject, fetchProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
// import { fetchSections } from '../../actions/section_actions';
// import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = state => ({
  projects: state.entities.projects,
  sections: state.entities.sections
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  // fetchProject: projectId => dispatch(fetchProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarProjectIndex)