import { connect } from 'react-redux';
import SideBarProjectIndex from './side_bar_project_index';
import { fetchProjects, deleteProject } from '../../actions/project_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  projects: state.entities.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarProjectIndex)