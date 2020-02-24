import { connect } from 'react-redux';
import TaskIndex from './task_index';
import { fetchTasks, deleteTask } from '../../actions/task_actions';
import { taskSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  tasks: state.entities.tasks,
  // tasks: taskSelector(state, ownProps.sectionId)
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: sectionId => dispatch(fetchTasks(sectionId)),
  deleteTask: taskId => dispatch(deleteTask(taskId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex)