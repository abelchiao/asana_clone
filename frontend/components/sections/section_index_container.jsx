import { connect } from 'react-redux';
import SectionIndex from './section_index';
import { fetchSections } from '../../actions/section_actions';

const mapStateToProps = state => ({
  // this may grab sections from other projects
  sections: state.entities.sections
});

const mapDispatchToProps = dispatch => ({
  fetchSections: projectId => dispatch(fetchSections(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionIndex);