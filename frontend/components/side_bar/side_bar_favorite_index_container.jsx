import { connect } from 'react-redux';
import SideBarFavoriteIndex from './side_bar_favorite_index';
import { deleteProject } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { favoritesSelector } from '../../reducers/selectors';
// import { fetchSections } from '../../actions/section_actions';
// import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = state => ({
  favoriteProjects: favoritesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFavoriteIndex)