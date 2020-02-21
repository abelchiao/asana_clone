import { connect } from 'react-redux';
import SideBarFavoriteIndex from './side_bar_favorite_index';
import { fetchProjects, deleteProject, removeFavorite } from '../../actions/project_actions';
import { openModal } from '../../actions/modal_actions';
import { favoritesSelector } from '../../reducers/selectors';

const mapStateToProps = state => ({
  favoriteProjects: favoritesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
  fetchProjects: () => dispatch(fetchProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId)),
  removeFavorite: projectFavoriteId => dispatch(removeFavorite(projectFavoriteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarFavoriteIndex)