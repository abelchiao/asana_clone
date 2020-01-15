import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  // pageTitle: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  createProject: (
    <div className='home-nav-dropdown-content-item' onClick={() => dispatch(openModal('create-project'))}>
      <div>New Project</div>
    </div>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)