import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import Home from './home';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  // createProject: (
  //   <button onClick={() => dispatch(openModal('create-project'))}>
  //     New Project
  //   </button>
  // ),
  // closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);