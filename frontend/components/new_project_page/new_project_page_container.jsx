import { connect } from 'react-redux';
import NewProjectPage from './new_project_page';

const mapStateToProps = state => ({
  ownerId: state.session.id
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage)