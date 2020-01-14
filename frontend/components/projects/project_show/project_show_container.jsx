import React from 'react'
import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../../actions/project_actions';
import { logout } from '../../../actions/session_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId]
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  logout: () => dispatch(logout()),
  createProject: (
    <div className='ps-nav-dropdown-content-item' onClick={() => dispatch(openModal('create-project'))}>
      New Project
    </div>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)