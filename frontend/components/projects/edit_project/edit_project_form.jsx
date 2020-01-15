import React from 'react';
import { withRouter } from 'react-router-dom';

class EditProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.project;
  };

  // componentDidMount() {
  //   this.props.fetchProject(this.props.match.params.projectId)
  // }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  render() {
    return (
      <div className='edit-form-parent'>
        <div className='edit-form-header'>
          <h1>Project details</h1>
          <svg className='edit-form-close-icon' viewBox='0 0 32 32'>
            <path d="M18.1,16L27,7.1c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L16,13.9l-8.9-9C6.5,4.3,5.6,4.3,5,4.9S4.4,6.4,5,7l8.9,8.9L5,24.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l8.9-8.9l8.9,8.9c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L18.1,16z"></path>
          </svg>
        </div>
        <form>
          <label htmlFor='edit-form-name'>Name</label>
          <input 
            id='edit-form-name' 
            type="text" 
            value={this.state.title}
            onChange={this.update('title')}
          />
          <label htmlFor='edit-form-description'>Description</label>
          <textarea 
            id='edit-form-description' 
            onChange={this.update('description')}
          />
        </form>
      </div>
    );
  };
};

export default EditProjectForm;