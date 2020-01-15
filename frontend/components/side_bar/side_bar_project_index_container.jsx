import { connect } from 'react-redux';
import SideBarProjectIndex from './side_bar_project_index';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBarProjectIndex)