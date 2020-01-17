import { connect } from 'react-redux';
import SectionIndex from './section_index';
import { fetchSections } from '../../actions/section_actions';
import { sectionSelector } from '../../reducers/selectors';
import { createSection, deleteSection } from '../../actions/section_actions';
import { createTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => ({
  // this may grab sections from other projects
  // sections: state.entities.sections
  sections: sectionSelector(state, ownProps.projectId)
});

const mapDispatchToProps = dispatch => ({
  fetchSections: projectId => dispatch(fetchSections(projectId)),
  createTask: task => dispatch(createTask(task)),
  createSection: section => dispatch(createSection(section)),
  deleteSection: sectionId => dispatch(deleteSection(sectionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndex);