import { connect } from 'react-redux';
import SectionIndex from './section_index';
import { fetchSections } from '../../actions/section_actions';
import { sectionSelector } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  // this may grab sections from other projects
  // sections: state.entities.sections
  sections: sectionSelector(state, ownProps.projectId)
});

const mapDispatchToProps = dispatch => ({
  fetchSections: projectId => dispatch(fetchSections(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndex);