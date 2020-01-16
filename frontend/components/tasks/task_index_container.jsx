import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks } from '../../actions/task_actions';

const mapStateToProps = state => ({
  tasks: state.entities.tasks
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: sectionId => dispatch(fetchTasks(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex)