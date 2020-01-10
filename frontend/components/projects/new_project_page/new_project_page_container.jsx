import { connect } from 'react-redux';
import NewProjectPage from './new_project_page';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = state => ({
  ownerId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createProject: project => dispatch(createProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage)