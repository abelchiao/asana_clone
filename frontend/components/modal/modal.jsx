import React from 'react';
import { connect } from 'react-redux';
import NewProjectPageContainer from '../projects/new_project_page/new_project_page_container';
import { closeModal } from '../../actions/modal_actions';
import EditProjectFormContainer from '../projects/edit_project/edit_project_form_container';

function Modal({modal, closeModal, currentProject}) {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'create-project':
      component = <NewProjectPageContainer />;
      break;
    case 'edit-project':
      component = <EditProjectFormContainer currentProject={currentProject} />
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
  modal: state.ui.modal,
  currentProject: state.entities.projects[state.ui.currentProject]
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);