import React from 'react';
import { connect } from 'react-redux';
import NewProjectPageContainer from '../projects/new_project_page/new_project_page_container';
import { closeModal } from '../../actions/modal_actions';

function Modal({modal, closeModal}) {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-project':
      component = <NewProjectPageContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-child' onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);