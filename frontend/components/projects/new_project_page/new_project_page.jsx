import React from 'react';
import { withRouter } from 'react-router-dom';
import SideBarContainer from '../../side_bar/side_bar_container';
import NavBarContainer from '../../nav_bar/nav_bar_container';
// import { closeModal } from '../../../actions/modal_actions';

class NewProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      owner_id: this.props.ownerId,
      team_id: 1,
      member_ids: [this.props.ownerId]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    const project = this.state
    this.props.createProject(project)
      // .then(project => this.props.history.location.replace(`/projects/${project.id}`))
    // this.props.history.push(`/projects/${project.id}`)
  };

  toggleDescription() {
    let toggleLink = document.getElementById('add-description-link');
    let toggleField = document.getElementById('cp-description-field');
    toggleLink.classList.add('hidden');
    toggleField.classList.remove('hidden');
  }

  render() {
    // debugger
    return (
      <div className='create-project-parent'>
        <div className='modal-nav'>
          <div className='modal-back-button'></div>
          <div className='modal-exit-button-container'>
            <img src={window.smallXIcon} onClick={this.props.closeModal}/>
            {/* <button 
              className='modal-exit-button'
              onClick={this.props.closeModal}
            >
              X
            </button> */}
          </div>
        </div>
        <div className='create-project-content'>
          <h1 className='apd-title'>Add project details</h1>
          <form className='create-project-form' onSubmit={this.handleSubmit}>
            <div className='create-project-input'>
              <div className='create-project-input-field'>
                <label 
                  className='create-project-field-label' 
                  htmlFor='cp-title'
                >
                  Project name
                </label>
                <input
                  id='cp-title'
                  type="text"
                  onChange={this.update('title')}
                />
              </div>
              <div className='adl-container'>
                <a 
                  id='add-description-link' 
                  onClick={this.toggleDescription} 
                >
                  Add a description
                </a>
              </div>
              <div 
                className='create-project-input-field hidden' 
                id='cp-description-field'
              >
                <label 
                  className='create-project-field-label' 
                  htmlFor='cp-description'
                >
                  Description
                </label>
                <textarea
                  id='cp-description'
                  onChange={this.update('description')}
                />
              </div>
            </div>
            <br/>
            <input id='cp-button' type='submit' value='Create Project'/>
          </form>
        </div>
      </div>
    )
  };
};

export default withRouter(NewProjectPage);