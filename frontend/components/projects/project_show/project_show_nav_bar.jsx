import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectShowNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.navigateToHome = this.navigateToHome.bind(this);
  }

  toggleShowSidebar() {
    const sidebar = document.getElementById('ps-sidebar-container');
    const burger = document.getElementById('ps-burger');
    sidebar.classList.remove('hidden');
    burger.classList.add('hidden');
  }

  revealDropdown() {
    document.getElementById('ps-nav-user-dropdown-content').classList.toggle('show')
  }

  revealUtilDropdown(e) {
    e.stopPropagation();
    document.getElementById('ps-nav-util-dropdown-content').classList.toggle('show');

    window.onclick = () => {
      let dropdowns = document.getElementsByClassName('ps-nav-util-dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  handleDelete(e) {
    e.stopPropagation();
    let dropdowns = document.getElementsByClassName('ps-nav-util-dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    this.props.deleteProject(this.props.project.id)
      .then(this.navigateToHome());
  }

  navigateToHome() {
    this.props.history.push('/home');
  };

  handleEdit(e) {
    e.stopPropagation();
    this.props.openModal('edit-project', this.props.project.id);
    let dropdowns = document.getElementsByClassName('ps-nav-util-dropdown-content');
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  render() {
    if (!this.props.project) return null;
    return (
      <div className='ps-nav-bar-parent'>
        <div className='ps-nav-left-items'>
          <svg onClick={this.toggleShowSidebar} id='ps-burger' className='nav-burger-icon hidden' viewBox='0 0 32 32'>
            <path d="M31,4H1C0.4,4,0,3.6,0,3s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,4,31,4z M31,16H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,16,31,16z M31,28H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1S31.6,28,31,28z"></path>
          </svg>
          <div className='ps-nav-project-icon-wrapper'>
            <svg className='ps-nav-project-icon' viewBox='0 0 32 32'>
              <path d="M26,2H6C2.7,2,0,4.7,0,8v14c0,3.3,2.7,6,6,6h20c3.3,0,6-2.7,6-6V8C32,4.7,29.3,2,26,2z M30,22c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V8c0-2.2,1.8-4,4-4h20c2.2,0,4,1.8,4,4V22z M26,9c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1s0.4-1,1-1h12C25.6,8,26,8.4,26,9z M12,15c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1s-0.4,1-1,1h-6C12.4,16,12,15.6,12,15z M24,21c0,0.6-0.4,1-1,1H13c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C23.6,20,24,20.4,24,21z M9.2,9c0,0.7-0.5,1.2-1.2,1.2S6.8,9.7,6.8,9S7.3,7.8,8,7.8S9.2,8.3,9.2,9zM9.2,15c0,0.7-0.5,1.2-1.2,1.2S6.8,15.7,6.8,15s0.5-1.2,1.2-1.2S9.2,14.3,9.2,15z M9.2,21c0,0.7-0.5,1.2-1.2,1.2S6.8,21.7,6.8,21s0.5-1.2,1.2-1.2S9.2,20.3,9.2,21z"></path>
            </svg>
          </div>
          <h1 className='ps-nav-project-name'>{this.props.project.title}</h1>
          <div className='ps-nav-util-dropdown-container'>
            <svg onClick={this.revealUtilDropdown} className='ps-nav-util-dropdown-icon' viewBox='0 0 32 32'>
              <path d="M25.9,12.9c-0.5-0.6-1.5-0.7-2.1-0.2L16,19.1l-7.8-6.4c-0.6-0.5-1.6-0.4-2.1,0.2c-0.5,0.6-0.4,1.6,0.2,2.1l8.8,7.2  c0.2,0.2,0.6,0.3,0.9,0.3s0.7-0.1,0.9-0.3l8.8-7.2C26.3,14.5,26.4,13.5,25.9,12.9z"></path>
            </svg>
            <div
              id='ps-nav-util-dropdown-content'
              className='ps-nav-util-dropdown-content'
            >
              <div onClick={this.handleEdit} className='ps-nav-util-dropdown-item'>
                Edit project details
              </div>
              <div onClick={this.handleDelete} className='ps-nav-util-dropdown-item'>
                Delete project
              </div>
            </div>
          </div>
        </div>
        <div onClick={this.revealDropdown} className='ps-user-dropdown-parent'>
          <div className='nb-user-util-icon'>DU</div>
          <div
            id='ps-nav-user-dropdown-content'
            className='ps-nav-user-dropdown-content'
          >
            {this.props.createProject}
            <div className='ps-nav-dropdown-content-item' onClick={this.props.logout}>
              Sign out
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default withRouter(ProjectShowNavBar);