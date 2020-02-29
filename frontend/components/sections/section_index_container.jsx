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
  // this may grab sections from other projects
  sections: state.entities.sections,
  // sections: sectionSelector(state, ownProps.projectId),
  // project: state.entities.projects[ownProps.projectId],
});

const mapDispatchToProps = dispatch => ({
  fetchSections: projectId => dispatch(fetchSections(projectId)),
  createTask: task => dispatch(createTask(task)),
  updateTask: task => dispatch(updateTask(task)),
  createSection: section => dispatch(createSection(section)),
  deleteSection: sectionId => dispatch(deleteSection(sectionId)),
  updateSection: section => dispatch(updateSection(section)),
  updateProject: project => dispatch(updateProject(project)),
  // fetchProject: projectId => dispatch(fetchProject(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndex);