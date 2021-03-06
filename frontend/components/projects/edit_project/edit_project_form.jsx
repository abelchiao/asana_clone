import React from 'react';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.currentProject,
      section_order: this.props.currentProject.sectionOrder
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  componentDidMount() {
    let timer = null;
    $('#edit-form-name').keydown(() => {
      clearTimeout(timer);
      timer = setTimeout(this.handleSubmit, 1000)
    });

    $('#edit-form-description').keydown(() => {
      clearTimeout(timer);
      timer = setTimeout(this.handleSubmit, 1000)
    });

    const descriptionField = document.getElementById('edit-form-description');
    descriptionField.focus();
    descriptionField.setSelectionRange(descriptionField.value.length, descriptionField.value.length);
  }

  handleSubmit() {
    // e.preventDefault();
    const project = {
      ...this.state,
      section_order: this.state.sectionOrder
    }
    // project[section_order] = this.state.sectionOrder
    this.props.updateProject(project);
    console.log(this.state)
  }

  render() {
    console.log('edit project form state: ', this.state)
    return (
      <div className='edit-form-parent'>
        <div className='edit-form-header'>
          <h1 className='edit-form-header-title'>Project details</h1>
          <svg onClick={this.props.closeModal} className='edit-form-close-icon' viewBox='0 0 32 32'>
            <path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path>
          </svg>
        </div>
        <form /*onSubmit={this.handleSubmit}*/ className='edit-form-contents'>
          <label className='edit-form-label' htmlFor='edit-form-name'>Name</label>
          <input 
            id='edit-form-name' 
            type="text" 
            value={this.state.title}
            onChange={this.update('title')}
          />
          <div className='edit-form-owner-info-container'>
            <div className='nb-user-util-icon'>DU</div>
            <div className='edit-form-owner-info'>
              <div className='edit-form-owner-info-label'>Owned by</div>
              <div className='edit-form-owner-name'>Demo User</div>
            </div>
          </div>
          <label className='edit-form-label' htmlFor='edit-form-description'>Description</label>
          <textarea 
            id='edit-form-description' 
            value={this.state.description}
            onChange={this.update('description')}
          />
          {/* <input type="submit" value='update project' /> */}
        </form>
      </div>
    );
  };
};

export default EditProjectForm;