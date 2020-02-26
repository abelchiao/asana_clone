import React from 'react'
import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../../actions/project_actions';
import { logout } from '../../../actions/session_actions';
import { openModal } from '../../../actions/modal_actions';
// import { fetchSections } from '../../../actions/section_actions'

const mapStateToProps = (state, ownProps) => ({
  project: state.entities.projects[ownProps.match.params.projectId],
  // sections: state.entities.sections
});

const mapDispatchToProps = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  logout: () => dispatch(logout()),
  createProject: (
    <div className='ps-nav-dropdown-content-item' onClick={() => dispatch(openModal('create-project'))}>
      New Project
    </div>
  ),
  // fetchSections: projectId => dispatch(fetchSections(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)