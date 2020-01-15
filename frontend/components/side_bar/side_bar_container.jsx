import { connect } from 'react-redux';
import SideBar from './side_bar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, projectId) => dispatch(openModal(modal, projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);