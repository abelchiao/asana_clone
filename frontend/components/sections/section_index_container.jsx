import { connect } from 'react-redux';
import SectionIndex from './section_index';
import { sectionSelector } from '../../reducers/selectors';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { 
  fetchSections, 
  createSection, 
  deleteSection,
  updateSection
} from '../../actions/section_actions';
import { createTask, updateTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  // write selector to filter for sections specific to this project
  sections: state.entities.sections,
  tasks: state.entities.tasks,
});

const mapDispatchToProps = dispatch => ({
  fetchSections: projectId => dispatch(fetchSections(projectId)),
  createTask: task => dispatch(createTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  createSection: section => dispatch(createSection(section)),
  updateSection: section => dispatch(updateSection(section)),
  updateProject: project => dispatch(updateProject(project)),
  fetchProject: projectId => dispatch(fetchProject(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndex);