import React from 'react'
import { connect } from 'react-redux';
import ProjectShowNavBar from './project_show_nav_bar';
import { logout } from '../../../actions/session_actions';
import { fetchProject, deleteProject } from '../../../actions/project_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  logout: () => dispatch(logout()),
  createProject: (
    <div className='ps-nav-dropdown-content-item' onClick={() => dispatch(openModal('create-project'))}>
      New Project
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowNavBar)