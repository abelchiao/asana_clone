import React from 'react';
import { connect } from 'react-redux';
import RecentProjectIndex from './recent_project_index';
import { 
  fetchProjects, 
  deleteProject,
  createFavorite,
  removeFavorite
} from '../../../actions/project_actions';
import { fetchAssociatedProjects } from '../../../reducers/selectors';
import { openModal, closeModal } from '../../../actions/modal_actions';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id],
  projects: fetchAssociatedProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
  createProject: (
    <div className='project-tile new-project-tile' onClick={() => dispatch(openModal('create-project'))}>
      <div className='new-project-icon'>
        <svg className='svg-plus-icon' viewBox='0 0 32 32'>
          <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
        </svg>
      </div>
      <div className='tile-project-title'>New Project</div>
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  createFavorite: projectFavorite => dispatch(createFavorite(projectFavorite)),
  removeFavorite: projectFavoriteId => dispatch(removeFavorite(projectFavoriteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentProjectIndex);