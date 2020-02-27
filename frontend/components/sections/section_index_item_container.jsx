import { connect } from 'react-redux';
import SectionIndexItem from './section_index_item';
import { sectionSelector } from '../../reducers/selectors';
import { fetchProject, updateProject } from '../../actions/project_actions';
import { fetchSection } from '../../actions/section_actions';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  // this may grab sections from other projects
  // sections: state.entities.sections,
  // sections: sectionSelector(state, ownProps.projectId),
  // project: state.entities.projects[ownProps.projectId],
  section: state.entities.sections[ownProps.sectionId]
});

const mapDispatchToProps = dispatch => ({
  // fetchSections: projectId => dispatch(fetchSections(projectId)),
  // createTask: task => dispatch(createTask(task)),
  // createSection: section => dispatch(createSection(section)),
  // deleteSection: sectionId => dispatch(deleteSection(sectionId)),
  // updateSection: section => dispatch(updateSection(section)),
  // updateProject: project => dispatch(updateProject(project)),
  fetchSection: sectionId => dispatch(fetchSection(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndexItem);