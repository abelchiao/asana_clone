import { connect } from 'react-redux';
// import TaskIndex from './task_index';
import SectionIndexItem from './section_index_item';
import { updateSection, deleteSection } from '../../actions/section_actions';
import { fetchTasks, deleteTask } from '../../actions/task_actions';
import { taskSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  tasks: state.entities.tasks,
  // section: state.entities.sections[ownProps.sectionId]
  // tasks: taskSelector(state, ownProps.sectionId)
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: sectionId => dispatch(fetchTasks(sectionId)),
  deleteTask: taskId => dispatch(deleteTask(taskId)),
  updateSection: section => dispatch(updateSection(section)),
  deleteSection: sectionId => dispatch(deleteSection(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndexItem)